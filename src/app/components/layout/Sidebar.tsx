import React from "react";
const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-white border-r flex flex-col px-4 py-6">
            <div className="mb-8">
                <span className="text-xs text-gray-400 font-semibold tracking-wide">PRINCIPAL</span>
            </div>
            <nav className="flex-1">
                <ul className="space-y-1">
                    <li>
                        <a href="/Home" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            <span className="material-icons text-lg">home</span>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="/reserves" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 text-black hover:bg-gray-100">
                            <span className="material-icons text-lg">event</span>
                            <span>Reservas</span>
                        </a>
                    </li>
                    <li>
                        <a href="Follow-up" className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                            <span className="material-icons text-lg">track_changes</span>
                            <span>Seguimiento</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
export default Sidebar;