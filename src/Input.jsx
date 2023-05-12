import React, { useState } from "react";

function Input(){
    const [value, setValue] = useState("")

    function handleOnChange(event){
        setValue(event.target.value)
    }
    return(
        <div>
        <input 
        type="text"
        placeholder="Digite Aqui" 
        value={value}
        onChange={handleOnChange}/>
        <br />
        <span>Eu digitei isso: {value}</span>
        </div>
    );
}
export default Input