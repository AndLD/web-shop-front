import React, {useState, useMemo} from 'react'
import './slavicAdminPanel.scss'

import {AddNewGoods} from "./adminComponents/AddNewGoods/AddNewGoods"
import {DisplayGoods} from "./adminComponents/DisplayGoods/DisplayGoods"

import {NavAdmin} from "./adminComponents/NavAdmin/NavAdmin"
import {HeaderAdmin} from "./adminComponents/HeaderAdmin/HeaderAdmin"

export const SlavicAdminPanel = (props) => {

    let [collapsed, collapseMenu] = useState(true) //* состояние свёрнутости nav'a true - раскрытый
    let [componentTitle, changeComponent] = useState("AddNewGoods") //* название компонента в Main'e
    let component
    switch (componentTitle) {
        case "AddNewGoods":
            component =  <AddNewGoods title="Добавление товара"/>
            break;
    
        case "DisplayGoods":
            component =  <DisplayGoods title="Отображение товара"/>
            break;

        default:
            component = <></>
            break;
    }

    return (
        <div className="slavic-admin-panel d-flex">

            <NavAdmin collapsed={collapsed} changeComponent={(x) => {changeComponent(x)}} />
           
            <main className="d-flex flex-column">
                <HeaderAdmin collapseMenu={() => {collapseMenu(!collapsed)}} />
                {component}
            </main>

        </div>
    )
}