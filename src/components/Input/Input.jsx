import React from 'react'
// import $ from 'jquery'
import './input.scss'

export const Input = (props) => {
    
    let tag = props.tag || "input",
        options = props.options || [],
        type = props.type || "text",
        id = props.id,
        name = props.name,
        className = props.className || "",
        modification = props.modification || "",
        placeholder = props.placeholder,
        
        width = props.width || "100%",
        height = props.height || 35,
        borderRadius = props.borderRadius,
        color = props.color || "black"
        
    const style = {
        width: width,
        height: height,
        color: color,
        borderRadius: borderRadius
    }

    //* input
    function InputDefault(props) {
        type = props.type || "text"
        return(
            <input 
                type={props.type} 
                id={props.id} 
                className= {props.className} 
                placeholder={props.placeholder}
                autoComplete="off"
                style={props.style}
                name={props.name}
                accept={props.accept}
            />
        )
    }

    //* input + iterator
    // function InputIterator() {
    //     let top = height / 2 - 7
    //     return(
    //         <div className="d-flex align-items-center iterator-input-wr" style={{width: width}}>
    //             <InputDefault />
    //             <div className="iterator-input d-flex align-items-center">
    //                 <input type="checkbox" className="main-checkbox " id={id} />
    //                 <label htmlFor={id}> i++ </label>
    //             </div>
    //         </div>
    //     )
    // }

    //* file
    function InputFile() {
        console.log("filesss")
        return(
            <div className="input-file">
                <InputDefault type={"file"} id={id} name={'file'} accept={".jpg, .jpeg, .png"} className={className} placeholder={placeholder} style={style}/>
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
                // case "iterator":
                //     input = InputIterator()
                //     break
                case "file":
                    input = InputFile()
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