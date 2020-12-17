import React, {useMemo, useState, useRef, useEffect} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import './navAdmin.scss'

// Активность сделать .active

const Li = ({icon, text, collapsed = false, callback} ) => {
    if(collapsed) text = ""
    return (
        <li onClick={callback}>
            <i className={icon} /> <span>{text}</span>
        </li>
    )
}

const Submenu = ({icon, text, collapsed = false, callback, children}) => {

    const [status, showSubmenu] = useState(false) //Хук на открытие/закрытие подменю
    
    if(collapsed) text = ""

    useMemo(()=>{
        if(!status)
            children = null
    }, [status])

    return(
        <li onClick={() => showSubmenu(!status)}> 
            <i className={icon}></i> <span>{text}</span> <i className="arrow fas fa-chevron-down"></i>
            
                 
                <CSSTransition in={status} timeout={200} classNames="my-node">
                    <ul> 
                        {children}
                    </ul>
                </CSSTransition>
                
            
        </li>
    )
}

export const NavAdmin = () => {

   const [collapsed, collapseMenu] = useState(true) //Хук на сворачивание/раскрытие меню
    const adminLogo = useRef(null);
    
    useEffect(() => {
       
        if(collapsed == true) {
            let script = adminLogo
            console.log(script)
            // logo.current.style.backgroundColor = "red";
            // let zzz = document.getElementsByClassName("admin-logo") 
            // console.log(zzz[0])
            // zzz[0].style.background="red"
        }
    })
    // useMemo(()=>{
         
    // }, [collapsed])

    return (
        <nav className="admin-nav">
            <div className="admin-logo d-flex justify-content-center" ref={adminLogo} onClick={() => {collapseMenu(!collapsed)}}>
                <img src="/img/logo.png" alt="Tech-price"/>
                <span>Tech-price</span>
            </div>
            
            <ul className="menu">
                
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

                {/* <Submenu icon={"fas fa-sliders-h"} collapsed={collapsed} text={"Настройки"}>
                    <Li text={"Цветовая схема"} callback={() => {
                        console.log("qqqqewqe")
                    }} />
                    <Li text={"Сообщить об ошибке"} callback={() => {
                        console.log("qqqqewqe")
                    }} />
                    <Li text={"Проверить обновление"} callback={() => {
                        console.log("qqqqewqe")
                    }} />
                </Submenu> */}

                <Li icon={"fas fa-sign-out-alt"} collapsed={collapsed} text={"Выйти"} callback={() => {
                    console.log("qqqqewqe")
                }} />
            </ul>
        </nav>
    )
}