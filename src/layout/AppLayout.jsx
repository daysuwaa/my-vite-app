import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBoundary, { ErrorBoundaryFallback } from "src/components/ErrorBoundary";
import Cookies from "js-cookie";
import config from "src/config";
import Providers from "./Providers";
import Sidebar from "src/components/Layout/Sidebar";
import Navbar from "src/components/Layout/Navbar";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  //--> determine the page routing based on the kyc status
  useEffect(() => {
    const Cookie = Cookies.get(config.LOGIN_REGISTER_ROUTE);

    if (Cookie === "true") return;

    //set a cookie that intial mount is true
    Cookies.set(config.LOGIN_REGISTER_ROUTE, "true");
    navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app flex h-screen">
      <Sidebar />
      <div className="flex-1 grid grid-rows-[auto_1fr] max-h-full overflow-hidden">
        <Navbar title="Dashboard" />
        <div className="overflow-x-hidden overflow-y-auto">
          <ErrorBoundary fallbackComponent={ErrorBoundaryFallback}>
            <Providers>{children}</Providers>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

// import IdleTimer from "react-idle-timer";

// const idleTimer = useRef(null);
// const { handleLogout } = useAuth();

// {
//   /* logout user after specified iactivity time (15mins - default) */
// }
// {
//   /* <IdleTimer
//         ref={idleTimer}
//         element={document}
//         onIdle={() => {
//           handleLogout();
//         }}
//         timeout={Number(LocalStorageUtils.getIdleTimeoutThreshold() ?? config.TIME_OUT ?? 900000)}
//       /> */
// }
