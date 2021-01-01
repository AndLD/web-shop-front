import React from 'react'
// import $ from 'jquery'
import './addNewGoods.scss'
import {Input} from '../../../Input/Input'

export class AddNewGoods extends React.Component {

    constructor(props) {
        super(props)
        this.formAddNewGoods = React.createRef()
        this.validateItem = this.validateItem.bind(this);
    }

    readFileAsync(file) { // перевод file в blob
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
      
          reader.onload = () => {
            resolve(reader.result);
          };
      
          reader.onerror = reject;
      
          reader.readAsDataURL(file);
        })
      }

    async validateItem() {    
        let inputs = this.formAddNewGoods.current,
            blob

        blob = await this.readFileAsync(inputs.photo.files[0])

        let body = {
            productCode: inputs.productCode.value, 
            title: inputs.title.value,
            price: inputs.price.value,
            images: [blob]
        }

        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: await JSON.stringify(body)
            });
            const result = await response.json();
            console.log('Успех:', result);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    render() {
        return (
            <div className="add-new-gooods d-flex flex-column">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 left-column">
                            <form className="d-flex flex-column" onSubmit={this.validateItem} ref={this.formAddNewGoods}>

                                <Input modification="file" name="photo" />
                                <Input placeholder="Код товара" name="productCode" />
                                <Input placeholder="Наименование" name="title" />
                                <Input placeholder="Цена (грн)" name="price" />
                                
                                <button type="sumbit">Сохранить</button>
                            </form>
                            
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