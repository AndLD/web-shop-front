import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import {Slider} from "./components/Slider/Slider"

export const useRoutes = () => {
    return (
        <Switch>

            <Route path="/" exact>
                <Slider />
            </Route>

            <Redirect to="/" />
            
        </Switch>
    )
}