import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('')
    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        // console.log("UpperCase is clicked ")
        setText(newText)
        props.showAlert(" Converted to upper Case","success")
        
    }
    const handleLowerCase= ()=>{
        let newText=text.toLowerCase();
        // console.log("UpperCase is clicked ")
        setText(newText)
        props.showAlert(" Converted to lower Case","success")
    }
    const handleclear= ()=>{
        // let newText='';
        // console.log("UpperCase is clicked ")
        setText('')
        props.showAlert(" Text cleared","success")
    }
    const handleOnChange= (event)=>{
        // console.log("function is clicked")
        setText(event.target.value )
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        props.showAlert(" Text copied","success")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    function countword(words){
        
        if(words.split(' ').length===1 && words.charAt(0)===''){
            return 0;
        }
        else if(words.charAt(words.length-1)===' '){
            return words.split(' ').length-1;
        }
        return words.split(' ').length;
    }
    
    return (
        <>
           <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>

                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button className="btn btn-primary my-3" onClick={handleLowerCase}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleclear}>
                    Clear
                </button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
                    Copy
                </button>
           </div>

            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{countword(text)} words and {text.length} characters</p>
                <p>{0.008*countword(text)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?0:'Enter something to preview'}</p>
            </div>
        </>
    )
}