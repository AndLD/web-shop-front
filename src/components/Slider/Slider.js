import React, {useRef, useEffect} from 'react'
// import $, { event } from 'jquery'
import './slider.scss'

export const Slider = () => {
    
    let WIDTH 
    // Массив сдайдов
    let slides = [] 
    // Текуший шаг
    let step = 0
    // Кнопки слайдера
    let sliderButtons = []
    // Слайдер
    let slider
    // Массив точек управления
    let points = []
    // Индекс (позиция) точки, на которую нажал пользователь
    let orderPosition

    // Вызов функции после второго рендеринга
    useEffect(() => {
        init()

        setInterval(() => {
            start(-1)
        }, 5000)
    })

    // Инициализирующая функция
    function init() {
        // Получаем ширину одного слайда
        WIDTH = parseInt(document.querySelector(".slide").offsetWidth)
        // Получаем слайдер
        slider = document.querySelector(".slider")
        // Получаем кнопки слайдера
        sliderButtons = document.querySelectorAll(".slider-button")
        // Привязываем обработчики событий к кнопкам слайдера
        sliderButtons[0].onclick = () => { start(1) }
        sliderButtons[1].onclick = () => { start(-1) }

        // Получаем все слайды
        slides = document.querySelectorAll(".slide")

        // Определяем начальную позицию (Шаг всегда начинается с центра)
        step = parseInt(slides.length / 2)

        // Первичная расстановка слайдов
        for(let i = 0, j = -parseInt(slides.length / 2); i < slides.length; i++) {
            slides[i].style.left = j*WIDTH
            j++
            // Добавление каждому слайду CSS класса, отвечающего за transition (анимацию прокрутки)
            slides[i].classList.add("transition")
        }


        // Инициализация точек управления
        let pointsDiv = document.querySelector(".points")
        for(let i = 0; i < slides.length; i++) {
            // Создание эдемента
            let div = document.createElement("div")
            // Добавление стандартного CSS класса
            div.classList.add("point")
            // Присвоение значения (номера для точки)
            div.setAttribute("value", i)
            // Привязка события по клику
            div.onclick = () => { pointClick(i) }
            // Отрисовка точки
            pointsDiv.appendChild(div)
        }
        // Получаем все созданные точки
        points = pointsDiv.children

        // Выделяем активную точку (которая соответствует текущему шагу)
        points[step].classList.add("active-point")
        
        // Центровка блока с точками
        pointsDiv.style.left = parseInt(document.querySelector(".slider-wrapper").style.width) - parseInt(pointsDiv.offsetWidth)
    }

    // Перерисовка элемента: удаления с одного края и добавление к другому.
    function redraw(side) {
        // Если "сторона" (направление) прокрутки - лево (1)
        if (side == 1) {
            // Запоминаем последний слайд
            let t = slides[slides.length - 1]
            // Присваиваем ему позицию на шаг раньше первого
            t.style.left = parseInt(slides[0].style.left) - WIDTH
            // Удаляем последний слайд
            slides[slides.length - 1].remove()
            // Добавляем запомненный слайд в начало массива
            slider.insertAdjacentElement("afterbegin", t)
        // Иначе если "сторона" прокрутки - право (-1)
        } else if (side == -1) {
            // Запоминаем первый элемент
            let t = slides[0]
            // Присваиваем ему позицию на шаг дальше последнего
            t.style.left = parseInt(slides[slides.length - 1].style.left) + WIDTH
            // Удаляем первый слайд
            slides[0].remove()
            // Добавляем запомненный слайд в конец массива
            slider.appendChild(t)
        }
    }

    // Главная функция
    function start(side) {
        // Получаем все слайды
        slides = document.querySelectorAll(".slide")
        // Сдвигаем их на один шаг (на ширину одного слайда) по выбранному направлению
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.left = parseInt(slides[i].style.left) + side*WIDTH
        }
        // Перерисовываем края дорожки
        redraw(side)
        // Смещаем шаг
        step -= side
        // Если он не входит в границы массива, исправляем это
        if (step >= slides.length) {
            step = 0
        } else if (step < 0) {
            step = slides.length - 1
        }
        
        // Переназначаем активную точку
        for(let i = 0; i < points.length; i++) {
            points[i].classList.remove("active-point")
        }
        points[step].classList.add("active-point")
    }

    // При нажатии на одну из точек управления
    function pointClick(pos) {
        // Получаем позицию, которую выбрал пользователь (которая соответствует значению точки)
        orderPosition = pos
        // Повторяем функцию проворота (старта) до тех пор, пока шаг не будет равняться заказанной позиции
        let repeat = setInterval(() => {
            if (step == orderPosition) {
                clearInterval(repeat)
                return
            } else if (step > orderPosition) {
                start(1)
            } else if (step < orderPosition) {
                start(-1)
            }
        }, 100)
    }


    return (
        <section className="slider-wrapper">
            <div className="slider">
                <img src="/img/slider/slider_1.jpg" loading="lazy" alt="slide" className="slide" />
                <img src="/img/slider/slider_2.jpg" loading="lazy" alt="slide" className="slide" />
                <img src="/img/slider/slider_3.jpg" loading="lazy" alt="slide" className="slide" />
            </div>
            <div className="slider-button slider-button-left"><img src="/img/left_white.png" /></div>
            <div className="slider-button slider-button-right"><img src="/img/right_white.png" /></div>
            <div className="points"></div>
        </section>
    )
}