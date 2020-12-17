import React from 'react'
// import $ from 'jquery'
import './input.scss'

export const Input = ({
    tag = "input",
    options = [],
    type = "text",
    id,
    className = "",
    modification = "",
    placeholder,
    
    width = "100%",
    height = 35,
    borderRadius,
    color = "black"
}) => {

    const style = {
        width: width,
        height: height,
        color: color,
        borderRadius: borderRadius
    }

    //* input
    function InputDefault() {
        return(
            <input 
                type={type} 
                id={id} 
                className= {className} 
                placeholder={placeholder}
                autoComplete="off"
                style={style}
            />
        )
    }

    //* input + iterator
    function InputIterator() {
        let top = height / 2 - 7
        return(
            <div className="d-flex align-items-center iterator-input-wr" style={{width: width}}>
                <InputDefault />
                <div className="iterator-input d-flex align-items-center">
                    <input type="checkbox" className="main-checkbox " id={id} />
                    <label htmlFor={id}> i++ </label>
                </div>
            </div>
        )
    }

    //* switch
    function SwitchDefault() {
        return(
            <select id={id} style={style}>
                {options.map((value) => {
                    return <option value={value}></option>
                })}
            </select>
        )
    }


    function getInput(tag){
        let input = <></>
        if(tag == "input") {
            switch(modification) {
                case "":
                    input = InputDefault()
                    break 
                case "iterator":
                    input = InputIterator()
                    break
                default:
                    console.error("Отсутствует такой модификатор")
            }
        } else if(tag == "select") {
            switch(modification) {
                case "" :
                    input = SwitchDefault()
                    break
                default:
                    console.error("Отсутствует такой модификатор")
            }
        } else {
            console.error("Отсутствует такой тег")
        }
        return input
    }  


    return(getInput(tag))
}