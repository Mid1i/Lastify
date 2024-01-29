import {useEffect, useState, useReducer} from "react";

import {appContext} from "./services";
import {Routers} from "./services";


export default function App() {
    const [openMenu, setOpenMenu] = useReducer(prev => !prev, true);
    const [openLang, setOpenLang] = useReducer(prev => !prev, false);
    const [theme, setTheme] = useState('dark');


    useEffect(() => {
        if ('dark/light'.includes(localStorage.getItem('theme'))) {
            setTheme(localStorage.getItem('theme'));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


    return (
        <appContext.Provider value={{openMenu, openLang, theme, setOpenMenu, setOpenLang, setTheme}}>
            <Routers/>    
        </appContext.Provider>
    );
}
