import config from "src/config";

function getValueFromLocalStorage(value) {
  let result = null;
  const storageResponse = localStorage.getItem(value);

  if (storageResponse) {
    result = storageResponse;
    result = JSON.parse(result);

    return result;
  }

  return result;
}

/**
 *
 * @returns Access or Refresh token
 */
function getToken() {
  return getValueFromLocalStorage(config.TOKEN);
}

/**
 *
 * @returns Refresh Token
 */
function getRefreshToken() {
  return getValueFromLocalStorage(config.REFRESH_TOKEN);
}

export { getToken, getRefreshToken };
