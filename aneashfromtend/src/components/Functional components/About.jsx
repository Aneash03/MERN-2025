import { useState } from "react";

const About=()=>{
    var [text,setText]=useState("Aneash")
    function handleText(event){
        setText(event.target.value)
    }
    return(
        <div >
            <h2>This is About Component</h2>
            <h2>TextArea:</h2>
            <textarea value={text} onChange={handleText}/>
            <textarea/>
            <p>The text is {text}</p>
        </div>
    )
}
export default About;