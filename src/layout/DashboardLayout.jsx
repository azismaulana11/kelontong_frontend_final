import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="container-fluid p-0 d-flex" style={{ minHeight: "100vh" }}>
            <div className="d-flex w-100" style={{ overflowY: "hidden" }}>
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <div className="w-100" style={{ backgroundColor: "#F5F5F5", overflowY: "hidden" }}>
                    <Topbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                    <div style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}