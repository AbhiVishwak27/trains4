import React from 'react'

export default function About(props) {
    let tColor = '';
    let bColor = '';
    let sty = {}
    if (props.mode === 'light'){
        tColor = "black";
        bColor = "#f8f9fa";
    } else if (props.mode === 'dark') {
        tColor = "white";
        bColor = "#212529";
    }
    sty = {
        color: tColor,
        backgroundColor: bColor
    }
    let txtColor = '';
    if (props.mode === 'light'){
        txtColor = "dark";
    }
    else if (props.mode === 'dark'){
        txtColor = "light";
    }
    return (
    <>
    <div className='container'>
    <h1 className={`my-2 text-${txtColor}`}>About TextUtils</h1>
    <div className="accordion" id="infoApp">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={sty}>
                    What is Text Utils?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#infoApp">
                <div className="accordion-body" style={sty}>
                    <p>TextUtils is an app which can be used for simple manipulation of text. It is a project from the ReactJs Course from Code With Harry</p>
                </div>
            </div>
        </div>
    </div>

    </div>
    </>
  )
}
