import {Routes, Route} from "react-router-dom";

import {Overview, Sales} from "../pages"; 


export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='/dashboard/sales' element={<Sales/>}/>
        </Routes>
    );
}