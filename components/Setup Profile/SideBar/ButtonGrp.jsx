import React from 'react'
import "./buttonGrp.css"

const selectedBtnCss = ["btn1","btn1","btn1","btn1","btn1","btn1","btn1","btn1"]

const ButtonGrp = ({buttons, selectedBtn, setSelectedBtn, icons}) => {
    return (
        <div className='buttonContainer'>
        {
            buttons.map((text,index)=>{
                const Icon = icons[index];
                return <div className={selectedBtn == index ? "btn1" : "menuBtn"} onClick={()=>setSelectedBtn(index)}>
                            <div>
                                <div className='menuIcon'>
                                    <Icon />
                                </div>
                                <div className='menuText'>
                                    {text}
                                </div>
                            </div>
                        </div>
            })
        }
    </div>
  )
}

export default ButtonGrp