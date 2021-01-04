import React from 'react'
import $ from 'jquery'
import './registration.scss'

export class Registration extends React.Component {
    async register(e) {
        e.preventDefault()
        
        let data = {
            email: document.querySelector('.auth-input[name="email"]').value,
            password: document.querySelector('.auth-input[name="password"]').value
        }

        console.log(JSON.stringify(data))

        let response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        let result = await response.text()

        alert(response.message)
    }

    onResize() {
        let width = document.body.clientWidth

        let colDefinitor = $(".col-definiter")
        let circuit1 = $(".circuit-1")
        let circuit2 = $(".circuit-2")

        if (width < 768 && colDefinitor.hasClass("col-5")) {
            colDefinitor.removeClass("col-5")
            console.log(true)

            circuit1.removeClass("visible")
            circuit1.addClass("invisible")

            circuit2.removeClass("visible")
            circuit2.addClass("invisible")

            document.body.classList.add("bg-w")
        } else if (width >= 768 && !colDefinitor.hasClass("col-5")) {
            colDefinitor.addClass("col-5")
            console.log(false)
            
            circuit1.removeClass("invisible")
            circuit1.addClass("visible")

            circuit2.removeClass("invisible")
            circuit2.addClass("visible")

            document.body.classList.remove("bg-w")
        }
    }

    render() {
        document.body.onload = () => {this.onResize()}
        document.body.onresize = () => {this.onResize()}
        return (
            <div className="registration text-center">
                <form>
                    <p className="title text-center">Регистрация</p>
                    
                    <input type="email" name="email" placeholder="Email" className="auth-input mb-5" aria-describedby="emailHelp" />
                    <input type="password" name="password" placeholder="Пароль" className="auth-input mb-5" />
                    
                    <button type="submit" className="mainButton mt-5 mb-5" onClick={this.register}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    <p className="title-with-lines">или авторизуйтесь через</p>
                    
                    <div className="other-authes d-flex flex-row">
                        <a href="/google-auth">
                            <svg className="p-2" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 2 28 28" width="84px" height="84px"><path d="M 16.003906 14.0625 L 16.003906 18.265625 L 21.992188 18.265625 C 21.210938 20.8125 19.082031 22.636719 16.003906 22.636719 C 12.339844 22.636719 9.367188 19.664063 9.367188 16 C 9.367188 12.335938 12.335938 9.363281 16.003906 9.363281 C 17.652344 9.363281 19.15625 9.96875 20.316406 10.964844 L 23.410156 7.867188 C 21.457031 6.085938 18.855469 5 16.003906 5 C 9.925781 5 5 9.925781 5 16 C 5 22.074219 9.925781 27 16.003906 27 C 25.238281 27 27.277344 18.363281 26.371094 14.078125 Z"/></svg>
                        </a>
                        <a href="/facebook-auth">
                            <svg className="p-2" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="84px" height="84px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 32.380773 34.967178 39.306373 27 40.720703 L 27 29 L 30.625 29 C 31.129 29 31.555188 28.623047 31.617188 28.123047 L 31.992188 25.123047 C 32.028188 24.839047 31.938047 24.553891 31.748047 24.337891 C 31.559047 24.122891 31.287 24 31 24 L 27 24 L 27 20.5 C 27 19.397 27.897 18.5 29 18.5 L 31 18.5 C 31.552 18.5 32 18.053 32 17.5 L 32 14.125 C 32 13.607 31.604844 13.174906 31.089844 13.128906 C 31.030844 13.123906 29.619984 13 27.833984 13 C 23.426984 13 21 15.616187 21 20.367188 L 21 24 L 17 24 C 16.448 24 16 24.447 16 25 L 16 28 C 16 28.553 16.448 29 17 29 L 21 29 L 21 40.720703 C 13.032822 39.306373 7 32.380773 7 24 C 7 14.593391 14.593385 7 24 7 z"/></svg>
                        </a>
                    </div>
                    <p className="already-registered">Уже есть аккаунт? <a href="/signin">Войти</a></p>
                </form>
            </div>
        )
    }
}