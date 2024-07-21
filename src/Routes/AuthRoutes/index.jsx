// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const AuthRoute = () => {
//   return !localStorage.getItem("data") ? (
//     <Outlet />
//   ) : (
//     <Navigate to={"/"} />
//   );
// };

// export default AuthRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    // Check if the user is not authenticated
    const isAuthenticated = !!localStorage.getItem("data");

    // Render the Outlet for nested routes if the user is not authenticated
    // Otherwise, continue with the existing routes
    return !isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/dashboard" />
    );
};

export default AuthRoute;
