import React, { useState } from 'react'
import "./LoginPage.css"
import LoginFirstPage from './LoginFirstPage';
import LoginSecondPage from './LoginSecondPage';

const LoginPage = (props) => { 

  const [isSignin,setIsSignin] = useState(false);

  const toggleCard = () => {
    setIsSignin((prev) => !prev);
  };
  const closeFcn = ()=>{
    
    toggle = !toggle;
  };

  return (props.trigger) ? (
    <div>
          <div className='loginBody'>
          </div>
      
          <div className='popup'>
            <div className='popupChild'>
                  <p className='closeBtn' onClick={()=>props.setTrigger(false)}>close</p>
              <div className='login1stPage'>
                  <LoginFirstPage/>
                  {/* <>{isSignin ? <LoginSecondPage/> : <LoginFirstPage toggle = {toggleCard} />}</> */}
              </div>  
            </div>
          </div>


    </div>
  ) : "";
}

export default LoginPage