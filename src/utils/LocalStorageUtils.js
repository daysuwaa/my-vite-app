import config from "src/config";

class LocalStorageUtils {
  static IS_REGISTER = "is_register";
  static IS_WELCOME_MODAL_DISMISSED = "is_welcome_modal_dismissed";
  static IS_DASHBOARD_TOUR_SKIPPED = "is_dashboard_tour_dismissed";
  static IS_DASHBOARD_TOUR_SHOW_ON_NEXT_LOGIN = "is_dashboard_tour_show_on_next_login";
  static IS_DOLLAR_ALERT_CREATED_DISMMISED = "is_dollar_account_created_alert_dismissed";
  static IS_ONBOARDING_MODAL_SHOWN = "is_onboarding_modal_shown";
  static SELECTED_MERCHANT = "selected_merchant";
  static DATE_RANGE = "date_range";
  static PER_PAGE = "table_per_page";
  static IS_SOFTPOS = "is_softpos";
  static SOFTPOS_LINK_EMAIL = "softpos_link_email";
  static IDLE_TIMEOUT_THRESHOLD = "idle_timeout_threshold";
  static SHOW_CREDIT_DESKTOP_NOTIFICATION = "show_credit_desktop_notification";
  static PLAY_SOUND_ON_CREDIT = "play_sound_on_credit";
  static TUTORIALS_LIST = "tutorials_list";

  //This checks if a user entetered the dashboad from login page or registration page
  /**
   *
   * @returns bool {
   * true-> entered by registration
   * false-> entered by login
   * default -> false
   * }
   */
  static getIsRegister = () => {
    let isReg = localStorage.getItem(this.IS_REGISTER);
    if (isReg == null) return false;
    return JSON.parse(isReg) ?? false;
  };
  static setIsRegister = (val) => {
    localStorage.setItem(this.IS_REGISTER, `${val}`);
  };
  /**
   * Checks if welcome modal that appears when users first visit dashboard page is dismissed
   * @returns bool
   */
  static getIsWelcomeModalDismissed = () => {
    let res = localStorage.getItem(this.IS_WELCOME_MODAL_DISMISSED);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setIsWelcomeModalDismissed = (val) => {
    localStorage.setItem(this.IS_WELCOME_MODAL_DISMISSED, `${val}`);
  };
  /**
   * Checks if the dashboard reactor menu list tour is skipped
   * @returns bool
   */
  static getIsDashboardTourSkipped = () => {
    let res = localStorage.getItem(this.IS_DASHBOARD_TOUR_SKIPPED);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setIsDashboardTourSkipped = (val) => {
    localStorage.setItem(this.IS_DASHBOARD_TOUR_SKIPPED, `${val}`);
  };
  /**
   * Checks if the dashboard reactor menu list tour is to be shown on next login
   * @returns bool
   */
  static getIsDashboardTourShowOnNextLogin = () => {
    let res = localStorage.getItem(this.IS_DASHBOARD_TOUR_SHOW_ON_NEXT_LOGIN);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setIsDashboardTourShowOnNextLogin = (val) => {
    localStorage.setItem(this.IS_DASHBOARD_TOUR_SHOW_ON_NEXT_LOGIN, `${val}`);
  };
  /**
   * Checks if the dashboard reactor menu list tour is skipped
   * @returns bool
   */
  static getIsDollarAccountCreated = () => {
    let res = localStorage.getItem(this.IS_DOLLAR_ALERT_CREATED_DISMMISED);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setIsDollarAccountCreated = (val) => {
    localStorage.setItem(this.IS_DOLLAR_ALERT_CREATED_DISMMISED, `${val}`);
  };
  /**
   * Checks if onboarding modal is shown
   * @returns bool
   */
  static getIsOnboardingModalShown = () => {
    let res = localStorage.getItem(this.IS_ONBOARDING_MODAL_SHOWN);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setIsOnboardingModalShown = (val) => {
    localStorage.setItem(this.IS_ONBOARDING_MODAL_SHOWN, `${val}`);
  };
  /**
   * get/sets selected merchant account id
   * @returns bool
   */
  static getSelectedMerchantId = () => {
    let res = localStorage.getItem(this.SELECTED_MERCHANT);
    if (res == null) return null;
    return res;
  };
  static setSelectedMerchantId = (val) => {
    localStorage.setItem(this.SELECTED_MERCHANT, `${val}`);
  };
  static clearMerhantData = () => {
    localStorage.removeItem(this.MERCHANT_DETAILS);
    localStorage.removeItem(this.SELECTED_MERCHANT);
  };
  static clearRegisterData = () => {
    localStorage.removeItem(this.IS_REGISTER);
  };
  /**
   * Date Range
   * @returns bool
   */
  static getDateRange = () => {
    let res = localStorage.getItem(this.DATE_RANGE);
    if (res == null) return "7d";
    return res;
  };
  static setDateRange = (val) => {
    localStorage.setItem(this.DATE_RANGE, `${val}`);
  };
  /**
   * Date Range
   * @returns bool
   */
  static getPerPage = () => {
    let res = localStorage.getItem(this.PER_PAGE);
    return res ?? 8;
  };
  static setPerPage = (val) => {
    localStorage.setItem(this.PER_PAGE, `${val}`);
  };
  static clearTableData = () => {
    localStorage.removeItem(this.PER_PAGE);
    localStorage.removeItem(this.DATE_RANGE);
  };

  /**
   * SoftPos Transition steps control
   * @returns bool
   */
  static getIsSoftPos = () => {
    return localStorage.getItem(this.IS_SOFTPOS);
  };
  static setIsSoftPos = (val) => {
    localStorage.setItem(this.IS_SOFTPOS, `${val ? 1 : 0}`);
  };

  /**
   * SoftPos LinkEmailValue
   * @returns bool
   */
  static getLinkEmailValue = () => {
    return localStorage.getItem(this.SOFTPOS_LINK_EMAIL);
  };
  static setLinkEmailValue = (val) => {
    localStorage.setItem(this.SOFTPOS_LINK_EMAIL, val);
  };

  /**
   * Idle timeout threshold
   * @returns bool
   */
  static getIdleTimeoutThreshold = () => {
    return localStorage.getItem(this.IDLE_TIMEOUT_THRESHOLD);
  };
  static setIdleTimeoutThreshold = (val) => {
    localStorage.setItem(this.IDLE_TIMEOUT_THRESHOLD, val ?? config.TIME_OUT);
  };

  /**
   * Show credit desktop notification
   * @returns bool
   */
  static getShowCreditDesktopNotification = () => {
    let res = localStorage.getItem(this.SHOW_CREDIT_DESKTOP_NOTIFICATION);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setShowCreditDesktopNotification = (val) => {
    localStorage.setItem(this.SHOW_CREDIT_DESKTOP_NOTIFICATION, val);
  };

  /**
   * Play sound on credit
   * @returns bool
   */
  static getPlaySoundOnCredit = () => {
    let res = localStorage.getItem(this.PLAY_SOUND_ON_CREDIT);
    if (res == null) return false;
    return JSON.parse(res);
  };
  static setPlaySoundOnCredit = (val) => {
    localStorage.setItem(this.PLAY_SOUND_ON_CREDIT, val);
  };

  /**
   * Tutorials list
   * @returns object
   */
  static getTutorialsList = () => {
    return localStorage.getItem(this.TUTORIALS_LIST);
  };
  static setTutorialsList = (val) => {
    localStorage.setItem(this.TUTORIALS_LIST, val);
  };
}
export default LocalStorageUtils;
