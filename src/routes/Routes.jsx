import { Route, Routes } from "react-router-dom";
import DashboardHomepage from "../pages/dashboard/homepage/Homepage";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/dashboard" element={<DashboardHomepage />} />
      </Routes>
    );
  };

  export default AppRoutes;