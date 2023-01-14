import React from 'react'

export default function About(props) {
  // const [myStyle, setmyStyle] = useState(
  //   {
  //     color:'black',
  //     backgroundColor:'white'
  //   }
  // )

  // const [Buttonstate, setButtonstate] = useState('Enable Dark Mode')
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'#042743':'white',
    border:'1px solid',
    borderColor:props.mode==='dark'?'white':'#042743'
    
  }

  // const  toggleStyle=()=>{
  //   if(props.mode=== 'light'){
  //     setmyStyle({
  //       color:'black',
  //       backgroundColor:'white',
  //       border:'1px solid white'
  //     })
  //     // setButtonstate('Enable Dark Mode');
  //   }
  //   else{
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     // setButtonstate('Enable Light Mode');
  //   }
  // }
  
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>Analyze your text</strong> 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is text analyzer.</strong> You can analyze your text here. If you want you can include new functionalities in by giving it a pull request , 
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
             <strong>Help in your assignment</strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Assignments</strong> You can use it to edit your text which will Help in your assignment. This is not final version of this software <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
               <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>0 charge</strong> This software is free to use. You can use it for your personal use. You can also use it for your commercial use.
            </div>
          </div>
        </div>
      </div>
      <div className="container">

      {/* <button type='button'  style={myStyle} className='btn btn-primary my-2' onClick={toggleStyle} >{Buttonstate}</button> */}
      </div>
    </div>
  )
}