import React from 'react'
import './displayGoods.scss'
import {Input} from '../../../Input/Input'

export class DisplayGoods extends React.Component {

    constructor(props) {
        super(props)

    }

    getRow() {
        return(
            <></>
        )
    }

    render() {
        return (
            <div className="display-goods">
               
                <div className="goods-table_wr">

                    <div className="goods-table-title d-flex justify-content-between">
                        <h2>Список товаров</h2>
                        <div className="btn-goods-wr">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                    </div>

                    <div className="goods-table">
                        <table>
                            {/* <tr>
                                <td><input type="checkbox"/></td>
                                <td>Изображение</td>
                                <td>Название товара</td>
                                <td></td>
                            </tr> */}
                        </table>
                    </div>
                </div>

                <div className="goods-filter_wr">
                    <div className="goods-filter-title d-flex justify-content-between">
                        <label htmlFor="">3132313123</label>
                        <input type="text"/>
                    </div>
                </div>

            </div>
        )
    }
}