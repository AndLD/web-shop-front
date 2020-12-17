import React from 'react'
// import $ from 'jquery'
import './addNewGoods.scss'

import {Input} from '../../../Input/Input'

export class AddNewGoods extends React.Component {

    constructor(props) {
        super(props)

        // this.toogleDisplayNone = this.toogleDisplayNone.bind(this);
    }

    render() {
        return (
            <div className="add-new-gooods d-flex flex-column">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-6 left-column">
                            <Input id="iterator" modification="iterator"/>
                        </div>

                        <div className="col-6 right-column">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}