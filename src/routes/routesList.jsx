import { lazy } from "react";
import { Navigate } from "react-router-dom";
import * as navIcons from "src/routes/navIcons";

const Login = lazy(() => import("src/pages/Auth/Login"));
const Dashboard = lazy(() => import("src/pages/Dashboard"));
const Payment = lazy(() => import("src/pages/Payment"));
const PaymentDetails = lazy(() => import("src/pages/Payment/Details"));
const Schedules = lazy(() => import("src/pages/Schedules"));
const ScheduleTable = lazy(() => import("src/pages/Schedules/Schedule-table"));
const ScheduleDetails = lazy(() => import("src/pages/Schedules/Scheduledetails"));
const SchedulePayments = lazy(() => import("src/pages/Schedules/Schedule_payments"));
const Beneficiaries = lazy(() => import("src/pages/Beneficiaries"));
const BeneficiaryTable = lazy(() => import("src/pages/Beneficiaries/Beneficiary_Table"));
const BeneficiaryPayment = lazy(() => import("src/pages/Beneficiaries/Beneficiarypayment"));
const Approvals = lazy(() => import("src/pages/Approvals"));
const Analytics = lazy(() => import("src/pages/Analytics"));
const Users = lazy(() => import("src/pages/Users"));
const Settings = lazy(() => import("src/pages/Settings"));

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false, // Public version
    component: () => Navigate({ to: "/login" })
  },
  {
    path: "/login",
    exact: false,
    isPrivate: false,
    component: Login
  },
  {
    path: "/",
    exact: true,
    isPrivate: true, // Private version
    component: () => Navigate({ to: "/dashboard" })
  },
  {
    path: "/dashboard",
    exact: true,
    isPrivate: true,
    component: Dashboard,
    logo: navIcons.Dashboard,
    title: "Dashboard"
  },
  {
    path: "/payment",
    exact: true,
    isPrivate: true,
    component: Payment,
    logo: navIcons.Payments,
    title: "Payments"
  },
  {
    path: "/payment/details",
    exact: true,
    isPrivate: true,
    component: PaymentDetails,
    logo: navIcons.Payments,
    title: "Payments"
  },
  {
    path: "/schedules",
    exact: true,
    isPrivate: true,
    component: Schedules,
    logo: navIcons.Schedules,
    title: "Schedules"
  },
  {
    path: "/schedules/table",
    exact: true,
    isPrivate: true,
    component: ScheduleTable,
    logo: navIcons.Schedules,
    title: "Schedules"
  },
  {
    path: "/schedules/details",
    exact: true,
    isPrivate: true,
    component: ScheduleDetails,
    logo: navIcons.Schedules,
    title: "Schedules"
  },
  {
    path: "/schedules/payments",
    exact: true,
    isPrivate: true,
    component: SchedulePayments,
    logo: navIcons.Schedules,
    title: "Schedules"
  },
  {
    path: "/beneficiaries",
    exact: true,
    isPrivate: true,
    component: Beneficiaries,
    logo: navIcons.Beneficiary,
    title: "Beneficiary"
  },
  {
    path: "/beneficiaries/table",
    exact: true,
    isPrivate: true,
    component: BeneficiaryTable,
    logo: navIcons.Beneficiary,
    title: "Beneficiary"
  },
  {
    path: "/beneficiaries/payments",
    exact: true,
    isPrivate: true,
    component: BeneficiaryPayment,
    logo: navIcons.Beneficiary,
    title: "Beneficiary"
  },
  {
    path: "/approvals",
    exact: true,
    isPrivate: true,
    component: Approvals,
    logo: navIcons.Approvals,
    title: "Approvals"
  },
  {
    path: "/analytics",
    exact: true,
    isPrivate: true,
    component: Analytics,
    logo: navIcons.Analytics,
    title: "Analytics"
  },
  {
    path: "/users",
    exact: true,
    isPrivate: true,
    component: Users,
    logo: navIcons.Users,
    title: "Users"
  },
  {
    path: "/settings",
    exact: true,
    isPrivate: true,
    component: Settings,
    logo: navIcons.Settings,
    title: "Settings"
  },
  {
    path: "*",
    exact: true,
    isPrivate: false, // Public version
    component: () => Navigate({ to: "/" })
  },
  {
    path: "*",
    exact: true,
    isPrivate: true, // Private version
    component: () => Navigate({ to: "/" })
  }
];

export default routes;
