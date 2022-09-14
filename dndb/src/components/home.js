import React from "react";

import Menu from "../navbar/menu";
import AppRoutes from "./routes/app_routes";

export default function Home(){

    return (
        <div className="everything">
            <Menu />
            <AppRoutes />
        </div>
    );
}