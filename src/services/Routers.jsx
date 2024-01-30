import {Routes, Route} from "react-router-dom";

import {Accounts, Feedback, Overview, Rare, Logs, Sales, Settings} from "../pages"; 


export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/logs' element={<Logs/>}/>
            <Route path='/prices/rare' element={<Rare/>}/>
            <Route path='/accounts' element={<Accounts/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/dashboard/sales' element={<Sales/>}/>
        </Routes>
    );
}