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

    async validateItem() {    
        let inputs = this.formAddNewGoods.current
        let reader, Blob
        try {
            reader = new FileReader()
            reader.addEventListener('load', (event) => {
                // img.src = event.target.result;
                Blob = reader.result
                
            })
            reader.readAsDataURL(inputs.file.files[0])
        }catch (err) {}

       

        if(inputs.title.value!= ' ' && inputs.price.value!= ' ' && inputs.file.files[0].size !=0) {
            let data = {
                images: [Blob],
                title: inputs.title.value,
                price: inputs.price.value
            }
            try {

                var request = new XMLHttpRequest();
                // 3. Настройка запроса
                request.open('POST','http://localhost:8080/products',true);
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                // 4. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
                request.onreadystatechange = function() {//Call a function when the state changes.
                    if(request.readyState == 4 && request.status == 200) {
                        alert(request.responseText);
                    }
                }
                // request.send(params);
                request.send(data);

                // const response = await fetch('http://localhost:8080/products', {
                //   method: 'POST', // или 'PUT'
                //   body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                //   headers: {
                //     'Content-Type': 'application/json'
                //   }
                // });
                // // const json = await response.json();
                // console.log('Успех:');
              } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    }

    render() {
        return (
            <div className="add-new-gooods d-flex flex-column">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 left-column">
                            <form className="d-flex flex-column" ref={this.formAddNewGoods}>

                                <Input modification="file" />
                                <input type="text" placeholder="Title" name="title" />
                                <input type="text" placeholder="Price" name="price" />
                                
                                <button onClick={this.validateItem} type="button">Отправить</button>
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