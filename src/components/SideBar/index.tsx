
import { Link } from "react-router-dom"; // Importação do Link
import { Home, Calendar, Scroll, ChevronDown, X, Menu, SquareChartGantt } from "lucide-react"; // Importação de ícones

interface SideBarProps {
    openSideBar: boolean;
    openSubmenus: number | null;
    toggleSideBar: () => void;
    toggleSubmenu: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ openSideBar, openSubmenus, toggleSideBar, toggleSubmenu }) => {
   

    const menuOptions = [
        {
            label: "OEE",
            role: "user",
            icon: <Home color="blue" width={'20px'} />, // Ícone adicionado
            path: "/oee", // Caminho da rota
            submenu: [],
        },
        {
            label: "Indisponibilidade",
            role: "user",
            icon: <Calendar color="red" width={'20px'} />, // Ícone adicionado
            path: "/indisponibilidade", // Caminho da rota
            submenu: [
                { label: "Visão Regional", role: "guest", path: "/indisponibilidade/regional" },
                { label: "Visão Dia a dia", role: "user", path: "/indisponibilidade/dia-dia" },
                { label: "COI", role: "guest", path: "/indisponibilidade/coi" },
                { label: "COI Dia a dia", role: "guest", path: "/indisponibilidade/coi-dia-dia" },
            ],
        },
        {
            label: "Faturamento",
            role: "user",
            icon: <Scroll color="green" width={'20px'} />, // Ícone adicionado
            path: "/faturamento", // Caminho da rota
            submenu: [],
        },
        {label: "Perdas", role: "user", icon: <SquareChartGantt color="purple" width={'20px'} />, path: "/relatorio", submenu: []},
    ];

    return (
        <div
            className={`
                absolute
                flex flex-col gap-4
                bg-white p-4
                top-0 left-0 z-20
                duration-300
                transition-all ease-in-out
                h-screen
                ${openSideBar ? "w-60" : "translate-x-[-100%]"}

                ${openSideBar ? "md:w-60" : "md:w-16 md:translate-x-[0]"}
                
                md:h-full
                md:flex
                md:drounded-lg shadow-md
                md:relative
                md:rounded-lg
                md:shadow-md
            `
            }     
        
        >
        <button 
            className={`md:hidden ${openSideBar ? "flex" : "hidden"} absolute top-20 -right-8 bg-gray-500 text-white p-2 rounded-lg cursor-pointer`} 
            onClick={toggleSideBar}
        >
            {openSideBar ? <X /> : <Menu />}
        </button>
        
            <h1 className={`duration-300 ${openSideBar ? "text-1xl": "text-[0px]"}`}>MIPI - V2</h1>

            <nav>
                <ul className="flex flex-col gap-3 mt-5">
                    {menuOptions.map((menu, index) => (
                        <li key={index} className="text">
                            <div
                                className="flex items-center gap-2"
                                onClick={() => toggleSubmenu(index)} // Alterna o submenu ao clicar
                            >

                                {menu.submenu.length > 0 ?
                                    
                                <div className="flex items-center  gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2 flex-1 w-full">
                                    <span>{menu.icon}</span>
                                    <span className={`duration-300 ${openSideBar ? "text-1xl" : "text-[0px]"}`} >{menu.label}</span>
                                    <span><ChevronDown color="gray" className={`duration-300 ${openSubmenus === index ? "rotate-180" : null} ${openSideBar ? "flex": "hidden"}`} /></span> 
                                </div>
                                :   <Link to={menu.path} className=" flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-md p-2 flex-1">
                                        {menu.icon}
                                        <span className={` duration-300 ${openSideBar ? "text-1xl" : "text-[0px]"}`} >{menu.label}</span>
                                    </Link>
                                }   
                                
                            </div>
                            {menu.submenu.length > 0 && ( // Verifica se o submenu está aberto
                                <ul className={`
                                    pl-9 flex flex-col gap-2
                                    overflow-hidden transition-all duration-500 ease-in-out
                                    
                                    ${openSubmenus === index ? "max-h-40" : "max-h-0"}
                                  `}
                                >
                                    {menu.submenu.map((sub, subIndex) => (
                                        <li key={subIndex} className="">
                                            <Link to={sub.path} className={`p-1 w-full hover:bg-gray-200 rounded-md flex`}>
                                                <span className={`duration-300 ${openSubmenus === index ? "text-1xl": "text-[0px]"}`}>{sub.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;