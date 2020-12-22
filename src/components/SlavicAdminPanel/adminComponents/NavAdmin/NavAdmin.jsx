import React, {СomponentDidUpdate, useState, useRef, useEffect, useMemo} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import './navAdmin.scss'

const Li = ({icon, text, collapsed = true, callback} ) => {
    if(!collapsed) text = ""
    return (
        <li onClick={callback}>
            <i className={icon} /> <span>{text}</span>
        </li>
    )
}


const Submenu = ({icon, text, collapsed, callback, children}) => {
    const collapsedSubmenu = useRef(null)
    let [status, showSubmenu] = useState(false) //Хук на открытие/закрытие подменю

    let Arrow = <i className="arrow fas fa-chevron-down"></i>
    
    if(!collapsed) {
        text = ""
        Arrow = ""
    }
    
    useEffect(() => {
        if(!collapsed) {
            collapsedSubmenu.current.classList.add("collapsed-submenu")
        } else collapsedSubmenu.current.classList.remove("collapsed-submenu")

        if(!status) {
            collapsedSubmenu.current.classList.add("d-none")
        } else collapsedSubmenu.current.classList.remove("d-none")
    })

    return(
        <li onClick={() => showSubmenu(!status)}> 
            <i className={icon}></i> <span>{text}</span> {Arrow}
            {/* <CSSTransition in={status} timeout={200} classNames="my-node"> */}
                <ul ref={collapsedSubmenu}> 
                    {children}
                </ul>
            {/* </CSSTransition> */}
        </li>
    )
}


export const NavAdmin = (props) => {
    const adminNav = useRef(null)

    let Logo = (
        <>
             <img src="/img/logo.png" alt="Tech-price"/>
             <span>Tech-price</span>
        </>
     )

    let collapsed = props.collapsed //true - раскрытое меню, false скрытое/свёрнутое

    const [width, changeWindowWidth] = useState()

    useEffect(() => {
        if(width <= 991) { //Если идёт переход на телефоны или планшеты, то прячем меню (настроить ширину)
            adminNav.current.classList.remove("w-300")
            if(collapsed) adminNav.current.classList.remove("d-none")
                else adminNav.current.classList.add("d-none")
        } else { //Если ноут, комп ...
            adminNav.current.classList.remove("d-none")
            if(collapsed) {
                adminNav.current.classList.add("w-300")
            } else adminNav.current.classList.remove("w-300")
        }
    })

    if(!collapsed) Logo = null

    window.addEventListener("resize", function() { // меняем значения окна в хуке
        changeWindowWidth(window.innerWidth)
    })

    return (
        <nav className="admin-nav" ref={adminNav}>
            <div className="admin-logo">
                {Logo}
            </div>
            
            <div className="d-flex flex-column align-items-center">
                <ul className="menu ">
                    
                    <Li icon={"fas fa-home"} text={"Главная"} collapsed={collapsed} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Li icon={"fas fa-chart-line"} text={"Статистика"} collapsed={collapsed} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Li icon={"fas fa-book"} active={true} text={"Управление товаром"} collapsed={collapsed} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Li icon={"fas fa-users"} text={"Пользователи"} collapsed={collapsed} callback={() => {
                        console.log("qqqqewqe")
                    }} />

                    <Submenu icon={"fas fa-sliders-h"} collapsed={collapsed} text={"Настройки"}>
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

                    <Li icon={"fas fa-sign-out-alt"} collapsed={collapsed} text={"Выйти"} callback={() => {
                        console.log("qqqqewqe")
                    }} />
                </ul>
            </div>
        </nav>
    )
}