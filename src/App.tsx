import React from "react";
import Footer from "./components/footer";
import AppRoutes from "./components/AppRoute";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
