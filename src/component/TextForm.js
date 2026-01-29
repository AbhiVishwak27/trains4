import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    let txtColor = '';
    if (props.mode === 'light'){
        txtColor = "dark";
    }
    else if (props.mode === 'dark'){
        txtColor = "light";
    }
    
    let bgColor = props.mode;
    
    const [text, setText] = useState('');

    const handleUpChange = () => {
        let nText = text.toUpperCase();
        setText(nText);
    }

    const handleLowChange = () => {
        let nText = text.toLowerCase();
        setText(nText);
    } 
    
    const handleCapChange = () => {
        let nArr = text.split(' ');
        let nText = []
        let i = 0;
        while(i <= nArr.length-1){
        //  Adding the new word to the array nText
        //  new word         capitalized first letter          rest of the string
            nText[i] = nArr[i].slice(0, 1).toUpperCase() + nArr[i].slice(1, nArr[i].length);
            i = i + 1;
        }
        nText = nText.join(' ');
        setText(nText);
    }

    const handleClearChange = () => {
        setText('');
    }
    
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3 container">
                <h1 className='my-3'>
                <label htmlFor="myBox" className={`form-label text-${txtColor}`}>{props.title}</label>
                </h1>
                <textarea className={`form-control text-${txtColor} bg-${bgColor}`} placeholder="Enter The Text Here..." value={text} onChange={handleOnChange} id="myBox" rows="11"></textarea>
            </div>
            <div className="container">
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpChange}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowChange}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCapChange}>Capitalize</button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mx-1 my-1" onClick={handleClearChange}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h2 className={`text-${txtColor}`}>Your Text Summary</h2>
                <p className={`text-${txtColor}`}>{text.split(" ").length} Word, {text.length} characters</p>
                <p className={`text-${txtColor}`}>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2 className={`text-${txtColor}`}>Preview</h2>
                <p className={`text-${txtColor}`}>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    title: PropTypes.string
}

TextForm.defautProps = {
    title: "Text Area"
}

