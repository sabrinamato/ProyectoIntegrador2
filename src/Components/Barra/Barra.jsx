import React from 'react'
import "./barra.css"
const Progress_bar = ({bgcolor,progress}) => {
     
    const Parentdiv = {
        height: 4,
        width: 180,
        borderRadius: 40,
      }
      
      const Childdiv = {
        height: 4,
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        
      }
      
        
    return (
    <div style={Parentdiv} className="barradiv">
      <div style={Childdiv} className="Childdiv" >
      </div>
      <div className="barraFondo"  style={{ backgroundColor: bgcolor}} ></div>
    </div>
    )
}
  
export default Progress_bar;