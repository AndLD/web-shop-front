import React, {useMemo, useState} from 'react'
import $ from 'jquery'
import './navAdmin.scss'

interface LiProps {
    icon?: string;
    text: string;
    callback? : any;
    active?: boolean;
}

interface UlProps {
    icon?: string;
    text: string;
    callback? : any;
    active?: boolean;
    children? : any;
}

const Li = ({icon, text, callback} : LiProps) => (
    <li onClick={callback}>
        <i className={icon} /> <span>{text}</span>
    </li>
)

const Submenu = ({icon, text, callback, children} : UlProps) => {

    const [status, showSubmenu] = useState<boolean>(false)

    useMemo(()=>{
        if(status == false) children = null
    }, [status])

    анимации

    return(
        <li onClick={() => showSubmenu(!status)}> 
            <i className={icon}></i> <span>{text}</span> <i className="arrow fas fa-chevron-down"></i>
             <ul> 
                {children}
            </ul>
        </li>
    )

}

export class NavAdmin extends React.Component {

    constructor(props : any) {
        super(props)

        // this.toogleDisplayNone = this.toogleDisplayNone.bind(this);
        // this.showSubmenu = this.showSubmenu;
    }

    render() {
        return (
            <nav className="admin-nav">
                <div className="admin-logo d-flex justify-content-center">
                    <img src="/img/logo.png" alt="Tech-price"/>
                    <span>Tech-price</span>
                </div>
                
                <ul className="menu">
                    
                    <Li icon={"fas fa-home"} text={"Главная"} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Li icon={"fas fa-chart-line"} text={"Статистика"} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Li icon={"fas fa-book"} active={true} text={"Управление товаром"} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Li icon={"fas fa-users"} text={"Пользователи"} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Submenu icon={"fas fa-sliders-h"} text={"Настройки"}>
                        <Li text={"Цветовая схема"} callback={() => {
                            console.log("qqqqewqe")
                        }} />
                        <Li text={"Сообщить об ошибке"} callback={() => {
                            console.log("qqqqewqe")
                        }} />
                        <Li text={"Проверить обновление"} callback={() => {
                            console.log("qqqqewqe")
                        }} />
                    </Submenu>

                    <Li icon={"fas fa-sign-out-alt"} text={"Выйти"} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    {/* <li className="active"> <i className="fas fa-book"></i>  <span>Управление товаром</span></li>
                    <li> <i className="fas fa-users"></i> <span>Пользователи</span></li>
                    <li> 
                        <i className="fas fa-sliders-h"></i> <span>Настройки</span> <i className="arrow fas fa-chevron-down"></i>
                        <ul>
                            <li>Цветовая схема</li>
                            <li>Сообщить об ошибке</li>
                            <li>Проверить обновление</li>
                        </ul>
                    </li>
                    <li> <i className="fas fa-sign-out-alt"></i> <span>Выйти</span></li> */} 
                </ul>
            </nav>
        )
    }
}