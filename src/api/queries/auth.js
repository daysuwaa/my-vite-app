import { useQuery, useMutation, useQueryClient } from "react-query";
import { client } from "src/api/utils/client";
import config from "src/config";
import Cookies from "js-cookie";
import { getToken } from "src/api/utils/auth-utils";

async function login(payload) {
  const response = await client("user/v1/gateway/login/web", { body: payload });

  if (response.tokens) {
    // figure out what to do with the refresh token later
    const { access, refresh } = response.tokens;
    saveToken(access, refresh);
  }

  return response;
}

async function getUser() {
  const token = getToken();

  // if token does not exist don't bother making the request
  if (!token) return Promise.resolve(null);

  try {
    return await client("user/v1/auth");
  } catch (error) {
    logout();

    return Promise.reject(error);
  }
}

/**
 *
 * @param {Obj} access access token obj{token, token_expires}
 * @param {obj} refresh same obj as access
 */
async function saveToken(access, refresh) {
  //-->Set access token
  // Cookies.set(config.TOKEN, JSON.stringify(access.token), {
  //   expires: 1,
  //   secure: process.env.NODE_ENV !== "development"
  // });
  localStorage.setItem(config.TOKEN, JSON.stringify(access.token));
  //-->Set refresh token
  // Cookies.set(config.REFRESH_TOKEN, JSON.stringify(refresh.token), {
  //   expires: 5,
  //   secure: process.env.NODE_ENV !== "development"
  // });
  localStorage.setItem(config.REFRESH_TOKEN, JSON.stringify(refresh.token));
}

function logout() {
  Cookies.remove(config.TOKEN);
  Cookies.remove(config.REFRESH_TOKEN);
  Cookies.remove(config.LOGIN_REGISTER_ROUTE);

  localStorage.removeItem(config.TOKEN);
  localStorage.removeItem(config.REFRESH_TOKEN);
  localStorage.removeItem(config.LOGIN_REGISTER_ROUTE);
  window.location.reload();
  return Promise.resolve();
}

export { getUser, login, logout, saveToken };

export function useLogin() {
  const queryClient = useQueryClient();

  // on succes saves the user obj from response to reactquery cache
  //  current version using the query key "user"
  return useMutation(login, {
    onSuccess: (res) => {
      queryClient.setQueryData("user", res.user);
    }
  });
}

export function useUserDetails() {
  const { data, status, isLoading } = useQuery({
    queryKey: "userDetails",
    queryFn: async () => await getUser()
  });

  return { user: data ?? null, status, isLoading };
}
