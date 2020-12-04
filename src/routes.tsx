import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"

export const useRoutes = () => {
    return (
        <Switch>

            <Route path="/" exact>
                <div className="container">
                    
                </div>
            </Route>

            <Redirect to="/" />
            
        </Switch>
    )
}