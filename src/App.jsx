import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import Schedules from "./pages/Schedules";
import Beneficiaries from "./pages/Beneficiaries";
import Approvals from "./pages/Approvals";
import Users from "./pages/Users/AddUser";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Sidebar from "./components/Layout/Sidebar";
import Error from "./components/Layout/Error";
import Details from "./pages/Payment/Details";
import Scheduletable from "./pages/Schedules/Schedule-table";
import Schedulepayments from "./pages/Schedules/Schedule_payments";
import Beneficiarytable from "./pages/Beneficiaries/Beneficiary_Table";
import BeneficiaryPayment from "./pages/Beneficiaries/Beneficiarypayment";
import Scheduledetails from "./pages/Schedules/Scheduledetails";
import Login from "./pages/Auth/Login";
import RecentsPayment from "./pages/Payment/RecentsPayment";
import AuthenticatedApp from "src/app/authenticatedApp";
import UnauthenticatedApp from "src/app/unauthenticatedApp";
import FullPageSpinner from "src/components/Loaders/FullPageSpinner";
import { useUserDetails } from "src/api/queries/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const RenderApp = () => {
  /**
   * A valid user response returns a non null value
   * This is used to determine if the user should be shown the authenticated app or not
   */
  const { user, isLoading } = useUserDetails();

  if (isLoading) return <FullPageSpinner />;
  if (user) return <AuthenticatedApp />;
  return <UnauthenticatedApp />;
};

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RenderApp />
      <Toaster />
    </QueryClientProvider>
  );

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route element={<WithSidebar />}>
  //         <Route path="/dashboard" element={<Dashboard />} />
  //         <Route path="/payment" element={<Payment />} />
  //         <Route path="/schedules" element={<Schedules />} />
  //         <Route path="/beneficiaries" element={<Beneficiaries />} />
  //         <Route path="/approvals" element={<Approvals />} />
  //         <Route path="/users" element={<Users />} />
  //         <Route path="/analytics" element={<Analytics />} />
  //         <Route path="/settings" element={<Settings />} />
  //         <Route path="/schedules/table" element={<Scheduletable />} />
  //         <Route path="/schedules/details" element={<Scheduledetails />} />
  //         <Route path="/payment/details" element={<Details />} />
  //         <Route path="/schedules/payments" element={<Schedulepayments />} />
  //         <Route path="/beneficiaries/table" element={<Beneficiarytable />} />
  //         <Route path="/beneficiaries/payments" element={<BeneficiaryPayment />} />
  //         <Route path="/*" element={<Error />} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
}

function WithSidebar() {
  const location = useLocation();

  // Check if the current location is not the login page
  if (location.pathname !== "/") {
    return (
      <div className="app flex h-screen">
        <Sidebar />
        <div className="content max-h-full overflow-y-auto" style={{ flex: 1 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/recents" element={<RecentsPayment />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/users" element={<Users />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/schedules/table" element={<Scheduletable />} />
            <Route path="/schedules/details" element={<Scheduledetails />} />
            <Route path="/payment/details" element={<Details />} />
            <Route path="/schedules/payments" element={<Schedulepayments />} />
            <Route path="/beneficiaries/table" element={<Beneficiarytable />} />
            <Route path="/beneficiaries/payments" element={<BeneficiaryPayment />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    );
  }

  // return null;
}

export default App;
