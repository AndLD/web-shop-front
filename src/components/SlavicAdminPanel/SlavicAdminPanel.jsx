import React from 'react'
// import $ from 'jquery'
import './slavicAdminPanel.scss'

import {AddNewGoods} from "./adminComponents/AddNewGoods/AddNewGoods"
import {NavAdmin} from "./adminComponents/NavAdmin/NavAdmin"
import {HeaderAdmin} from "./adminComponents/HeaderAdmin/HeaderAdmin"

export class SlavicAdminPanel extends React.Component {

    constructor(props) {
        super(props)

        // this.toogleDisplayNone = this.toogleDisplayNone.bind(this);
    }

    render() {
        return (
            <div className="slavic-admin-panel d-flex">

                <NavAdmin />

                <main className="d-flex flex-column">
                    <HeaderAdmin />
                    <AddNewGoods title="Добавление товара"/>
                </main>

            </div>
        )
    }
}