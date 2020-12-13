import React from 'react'
import $ from 'jquery'
import './addNewGoods.scss'

import {Input} from '../../../Input/Input'

interface AddNewGoodsProps {
    title : string
}

export class AddNewGoods extends React.Component<AddNewGoodsProps> {

    constructor(props : any) {
        super(props)

        // this.toogleDisplayNone = this.toogleDisplayNone.bind(this);
    }

    render() {
        return (
            <div className="add-new-gooods d-flex flex-column">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-6 left-column">
                            dsds
                        </div>

                        <div className="col-6 right-column">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}