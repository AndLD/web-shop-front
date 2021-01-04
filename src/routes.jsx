import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import {Header} from "./components/Header/Header"
import {Slider} from "./components/Slider/Slider.js"

import {ItemsWrapper} from "./components/ItemsWrapper/ItemsWrapper"

import {TelegramChannel} from "./components/TelegramChannel/TelegramChannel"

import {SlavicAdminPanel} from "./components/SlavicAdminPanel/SlavicAdminPanel"

// import {Registration} from "./components/Registration/Registration"
import {RegistrationWrapper} from "./wrappers/RegistrationWrapper"

export const useRoutes = () => {
    return (
        <Switch>

            <Route path="/" exact> 
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Header />
                            {/* <Slider /> */}
                            <ItemsWrapper typeRender="all-items"/>                            
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="col-6">
                            <TelegramChannel borderRadius = {"20px 0 0 20px"} reverse = {false} />
                        </div>
                        <div className="col-6">
                            <TelegramChannel borderRadius = {"0 20px 20px 0"} reverse = {false} />
                        </div>
                    </div> */}
                </div>
            </Route>

            <Route path="/admin" exact> 
                <SlavicAdminPanel />
            </Route>

            <Route path="/signup" exact>
                <RegistrationWrapper />
            </Route>

            <Redirect to="/" />
            
        </Switch>
    )
}