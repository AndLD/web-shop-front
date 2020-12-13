import React from 'react'
import $ from 'jquery'
import './headerAdmin.scss'
import { NavAdmin } from '../NavAdmin/NavAdmin'

export const HeaderAdmin = () => {

        function hideNavText() { //скрывает nav
            $(".admin-nav li > span").toggleClass("d-none")

            let $adminLogo = $(".admin-logo > span")
            $adminLogo.toggleClass("d-none")
            $adminLogo.toggleClass("d-none")
            // $adminLogo.getElementsByClassName("").toggleClass("d-none")
        }

        return (
            <div className="admin-header d-flex justify-content-between align-items-center">
                <div>
                    <button onClick={hideNavText} className="reduce-sidebar"><img src="/img/icons/align-left.svg" alt=""/></button>
                </div>
                <div>
                    wqew
                </div>
            </div>
        )
}