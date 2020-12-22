import React from 'react'
import './headerAdmin.scss'

export const HeaderAdmin = (props) => {

        function hideNavText() { //скрывает nav
            props.collapseMenu()
        }
        
        return (
            <div className="admin-header d-flex justify-content-between align-items-center col-xs-12">
                <div>
                    <button onClick={hideNavText} className="reduce-sidebar"><img src="/img/icons/align-left.svg" alt=""/></button>
                </div>
                <div>
                    автарка
                </div>
            </div>
        )
}