import React from "react";
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import PrivateRoute from "./private";
import { LazyHome, LazyReserveTable } from "../screens/lazyScreens";

const Routes = () => {
    const isAuthenticated = false;

  return (
    <Router>
      <RouterRoutes>
        {/* Public Routes */}
        <Route path="/" element={<LazyHome />} />
        {/* <Route path="/login" element={<LazyLogin />} /> */}

        {/* Protected Routes */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/reserve-table" element={<LazyReserveTable />} />
          {/* Add more protected routes here */}
        </Route>
      </RouterRoutes>
    </Router>
  );
};

export default Routes;
