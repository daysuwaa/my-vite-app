import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Payment/Payment";
import Schedules from "./components/Schedule/Schedules";
import Beneficiaries from "./components/Beneficiary/Beneficiaries";
import Approvals from "./components/Approvals/Approvals";
import Users from "./components/Users/AddUser";
import Analytics from "./components/Analytics/Analytics";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Layout/Sidebar";
import Error from "./components/Layout/Error";
import Details from "./components/Payment/Details";
import Scheduletable from "./components/Schedule/Schedule-table";
import Schedulepayments from "./components/Schedule/Schedule_payments";
import Beneficiarytable from "./components/Beneficiary/Beneficiary_Table";
import BeneficiaryPayment from "./components/Beneficiary/Beneficiarypayment";
import Scheduledetails from "./components/Schedule/Scheduledetails";
import Login from "./components/Layout/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<WithSidebar />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />
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
          <Route
            path="/beneficiaries/payments"
            element={<BeneficiaryPayment />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
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
            <Route
              path="/beneficiaries/payments"
              element={<BeneficiaryPayment />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    );
  }

  // return null;
}

export default App;
