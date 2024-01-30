import {Routes, Route} from "react-router-dom";

import {Accounts, Feedback, Overview, Logs, Sales, Settings} from "../pages"; 


export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/logs' element={<Logs/>}/>
            <Route path='/accounts' element={<Accounts/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/dashboard/sales' element={<Sales/>}/>
        </Routes>
    );
}