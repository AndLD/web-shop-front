import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import {Header} from "./components/Header/Header"
import {Slider} from "./components/Slider/Slider.js"

import {ItemCard} from "./components/ItemCard/ItemCard"

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

                            <div className="item_wr d-flex justify-content-between b-white">
                                <ItemCard itemId={1} imgSrc={1} title={"Видеокарта Gigabyte GeForce GTX 1660 SUPER OC 6144MB (GV-N166SO)"} price={"10 400"}/>
                                <ItemCard itemId={2} imgSrc={2} title={"Видеокарта Asus GeForce RTX 2070 Turbo 8192MB (TURBO-RTX2070-8G"} price={"10 400"}/>
                                <ItemCard itemId={3} imgSrc={3} title={"Видеокарта MSI GeForce GTX 1660 SUPER VENTUS XS OC 6144MB (GTX  "} price={"10 400"}/>
                                <ItemCard itemId={4} imgSrc={1} title={"Видеокарта Gigabyte GeForce GTX 1650 D6 WindForce OC 4096MB (GV"} price={"10 400"}/>
                                <ItemCard itemId={5} imgSrc={2} title={"Видеокарта Palit GeForce GTX 1660 SUPER StormX 6144MB (NE6166S0"} price={"10 400"}/>
                            </div>
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