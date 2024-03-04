import { Component } from "react";
// import Cookies from "js-cookie";
// import LocalStorageUtils from "utils/LocalStorageUtils";
import config from "src/config";

export const ErrorBoundaryFallback = () => (
  <div>
    <div>
      Hey, something went wrong!
      <span
        onClick={() => {
          // Cookies.remove(config.TOKEN);
          // Cookies.remove(config.REFRESH_TOKEN);
          // Cookies.remove(config.LOGIN_REGISTER_ROUTE);
          // Clear local storage
          // LocalStorageUtils.clearRegisterData();
          // LocalStorageUtils.clearMerhantData();
          // LocalStorageUtils.clearTableData();
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Please refresh!
      </span>
      <span role="img" aria-label="face-emoji">
        {" "}
        😞
      </span>
    </div>
  </div>
);

class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorBoundaryFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
