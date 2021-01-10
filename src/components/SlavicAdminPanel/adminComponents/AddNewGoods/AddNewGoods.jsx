import React from 'react'
// import $ from 'jquery'
import './addNewGoods.scss'
import {Input} from '../../../Input/Input'
import {fileToBlob} from '../../../../helpers/fileToBlob'
import {fetchRequest} from '../../../../helpers/fetchRequest'
export class AddNewGoods extends React.Component {

    constructor(props) {
        super(props)
        this.formAddNewGoods = React.createRef()
        this.validateItem = this.validateItem.bind(this);
    }

    async validateItem() {    
        let inputs = this.formAddNewGoods.current,
            blob

        blob = await fileToBlob(inputs.photo.files[0])

        let body = {
            productCode: inputs.productCode.value, 
            title: inputs.title.value,
            price: inputs.price.value,
            images: [blob]
        }

        const result = await fetchRequest(
            'products', 
            'POST',
            body,
            {'Content-Type': 'application/json;charset=utf-8'}
        )

        console.log(result)
    }

    render() {
        return (
            <div className="add-new-goods d-flex flex-column">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 left-column">
                            <form className="d-flex flex-column" onSubmit={this.validateItem} ref={this.formAddNewGoods}>

                                <Input modification="file" name="photo" />
                                <Input placeholder="Код товара" name="productCode" />
                                <Input placeholder="Наименование" name="title" />
                                <Input placeholder="Цена (грн)" name="price" />
                                
                                
                            </form>
                            <button onClick={this.validateItem} type="sumbit">Сохранить</button>
                        </div>
{/* 
                        <div className="col-6 right-column">
                            
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}