import React from "react"
import Page from "../pages/Page.jsx";
import {Test} from "../App"

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

export const RouteItems = () => {
    return (
        <Routes>
            <Route path='/' element={<Test />} />
            <Route path='/page/:id' element={<Page />} />
        </Routes>
    )
}
