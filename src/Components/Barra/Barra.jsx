import React from 'react'
  
const Progress_bar = ({bgcolor,progress}) => {
     
    const Parentdiv = {
        height: 4,
        width: 180,
        backgroundColor: 'white',
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
      <div style={Childdiv} >
      </div>
    </div>
    )
}
  
export default Progress_bar;