import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import { LogOut, Menu, X } from "lucide-react";
import React from "react";

const Layout: React.FC = () => {

    const [openSubmenus, setOpenSubmenus] = React.useState<number | null>(null); // Estado para controlar o submenu aberto
    
    const [ openSideBar, setOpenSideBar ] = React.useState(false); // Estado para controlar a visibilidade da sidebar

    function toggleSideBar() {
        if(openSubmenus !== null) {
            setOpenSubmenus(null); // Fecha o submenu se estiver aberto
        }

        
        setOpenSideBar(!openSideBar);
    }

    const toggleSubmenu = (index: number) => {

        if (openSideBar === false) {
            setOpenSideBar(true); // Abre a sidebar se estiver fechada  
        }
        setOpenSubmenus(openSubmenus === index ? null : index); // Abre/fecha o submenu
    };
    
    return (
        <div 
        className=" 
                    grid
                    grid-cols-1
                    w-full h-screen
                    md:grid-cols-[auto_1fr]
                    max-w-[1440px]
                    md:p-8 gap-8 m-auto">

        <SideBar toggleSideBar={toggleSideBar} toggleSubmenu={toggleSubmenu} openSideBar={openSideBar} openSubmenus={openSubmenus}/>
        <main className="w-full rounded-lg z-10">

            <header className="flex flex-row items-center gap-4 justify-between bg-white p-4 md:rounded-lg shadow-md z-10">
                <section className="flex flex-row gap-10 items-center">
                    <button className=" text-gray-600 p-2 cursor-pointer" onClick={toggleSideBar}>
                        {
                            openSideBar ? <X /> : <Menu /> 
                        }
                    </button>
                    <h1>OEE</h1>
                </section>
                

                <section className="flex flex-row justify-end items-center gap-10">
                    <span>Olá, Usuário!</span>
                    <button className="flex items-center gap-1"><span className="hidden md:flex">Logout</span><LogOut className="size-4 relative top-[0.6px]"/></button>
                </section>

            </header>
            <Outlet />
        </main>
        </div>
    )
};

export default Layout;