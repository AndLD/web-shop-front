import React from 'react'
// import $ from 'jquery'
import './input.scss'

//* input
function InputDefault(props) {  
    return(
        <input 
            type={props.type} 
            id={props.id} 
            className= {props.className} 
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            style={props.style}
            name={props.name}
            accept={props.accept} //типы файлов в списке (при type: file;)
            required
        />
    )
}

//* input + iterator
// function InputIterator(props) {
//     let top = props.style.height / 2 - 7
//     return(
//         <div className="d-flex align-items-center iterator-input-wr" style={{width: props.style.width}}>
//             <InputDefault />
//             <div className="iterator-input d-flex align-items-center">
//                 <input type="checkbox" className="main-checkbox " id={props.id} />
//                 <label htmlFor={props.id}> i++ </label>
//             </div>
//         </div>
//     )
// }

//* file
function InputFile(props) {
    return(
        <div className="input-file">
            <InputDefault type={"file"} accept={"image/jpeg,image/png,image/jpg,image/gif"} name={props.name} id={props.id}/>
        </div>
    )
}

//* switch
function SwitchDefault(props) {
    return(
        <select id={props.id} style={props.style}>
            {props.options.map((value) => {
                return <option value={value}></option>
            })}
        </select>
    )
}

export const Input = (props) => {
    
    let tag = props.tag || "input",
        options = props.options || [],
        type = props.type || "text",
        id = props.id,
        name = props.name,
        className = props.className || "",
        modification = props.modification || "default",
        placeholder = props.placeholder,
        autoComplete = props.autoComplete || "off",
        accept = props.accept || null,
        width = props.width || "100%",
        height = props.height || "auto",
        padding = props.padding || "10px 0 10px",
        borderRadius = props.borderRadius,
        color = props.color || "black"
        
    const style = {
        width: width,
        height: height,
        padding: padding,
        color: color,
        borderRadius: borderRadius
    }

    function getInput(tag){
        let input = <></>
        if(tag == "input") {
            switch(modification) {
                case "default":
                    input = <InputDefault type={type} id={id} className={className} placeholder={placeholder} autoComplete={autoComplete} style={style} name={name} accept={accept}/>
                    break 
                // case "iterator":
                //     input = InputIterator()
                //     break
                case "file":
                    input = <InputFile name={name} id={id} />
                    break
                default:
                    console.error("Отсутствует такой модификатор")
            }
        } else if(tag == "select") {
            switch(modification) {
                case "" :
                    input = <SwitchDefault options={options} />
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