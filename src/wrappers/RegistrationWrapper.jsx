import React from 'react'

import {Registration} from "../components/Registration/Registration"

export class RegistrationWrapper extends React.Component{
    render() {
        return (
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-definiter col-5">
                        <Registration />
                    </div>
                </div>

                <img className="fixed-top circuit-1" src="/img/left-top-neutron.png" alt="circuit-1"/>
                <img className="fixed-bottom circuit-2" src="/img/left-down-neutron.png" alt="circuit-2"/>
            </div>
        )
    }
}