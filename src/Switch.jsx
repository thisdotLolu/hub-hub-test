import React from 'react'

const Switch = ({color,state,toggled,setToggled}) => {
  return (
    <div>
        <div onClick={()=>setToggled(!toggled)} className={`switch${toggled ? state = ' grid'  : ""}`}>
            <div className='notch'></div>
            <div className='state'>
                <div className='bar'/>
                <div className='bar'/>
                <div className='bar'/>
                <div className='bar'/>
            </div>
        </div>
    </div>
  )
}

export default Switch;