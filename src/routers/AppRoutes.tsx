import { Route, Routes } from "react-router-dom"

import Nearby from "../components/app/location/Nearby"

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/nearby" element={<Nearby/>}/>
        </Routes>
    )
}