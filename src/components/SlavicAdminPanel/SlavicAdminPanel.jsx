import React, {useState, useMemo} from 'react'
import './slavicAdminPanel.scss'

import {AddNewGoods} from "./adminComponents/AddNewGoods/AddNewGoods"
import {NavAdmin} from "./adminComponents/NavAdmin/NavAdmin"
import {HeaderAdmin} from "./adminComponents/HeaderAdmin/HeaderAdmin"

export const SlavicAdminPanel = (props) => {

    let [collapsed, collapseMenu] = useState(false);

    return (
        <div className="slavic-admin-panel d-flex">

            <NavAdmin collapsed={collapsed}/>
           
            <main className="d-flex flex-column">
                <HeaderAdmin collapseMenu={() => {collapseMenu(!collapsed)}}/>
                <AddNewGoods title="Добавление товара"/>
            </main>

        </div>
    )
}