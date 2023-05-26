import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout() {
    useEffect(() => {
        // Clear local storage when logout
        localStorage.clear();
    }, []);

    return <Navigate to="/" replace />;
}

export default Logout;
