import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout() {
    useEffect(() => {
        // Clear session storage on component mount
        localStorage.clear();
    }, []);

    return <Navigate to="/" replace />;
}

export default Logout;
