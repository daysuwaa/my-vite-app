import LocalStorageUtils from "src/utils/LocalStorageUtils";
import { pusherEncrypt } from "src/utils/pusherEncrypt";

export function loginAuth(payload, mutate) {
  const newPayload = JSON.stringify(payload);

  mutate(
    { data: pusherEncrypt(newPayload?.toString("base64"), "string") },
    {
      onSuccess: () => {
        //Sets that user is entering the dashboard from register page
        if (LocalStorageUtils.getIsDashboardTourShowOnNextLogin() === true) {
          LocalStorageUtils.setIsRegister(true); //Next login show dashboard tour
          LocalStorageUtils.setIsDashboardTourSkipped(false);
        } else {
          LocalStorageUtils.setIsRegister(false);
        }
        window.location.reload();
        // doToast("Logged in successfully", "success");
      },
      onError: (error) => {
        // network error has been handled already in client fn
        if (error !== "Network Error") {
          //   doToast(error?.response?.data?.message, "error");
        }
      }
    }
  );
}
