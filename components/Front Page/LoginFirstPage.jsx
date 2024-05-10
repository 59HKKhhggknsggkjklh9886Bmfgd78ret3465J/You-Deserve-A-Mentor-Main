import React from 'react'

const LoginFirstPage = ({toggle}) => {
  return (
    <div className='continueSigninCard'>          
      <p className='signInText'>Sign In</p>
      <p className='line'></p>
      <p className='continue'>Continue with</p>
      
      <div className='icons'>
        <li>
          <img src='/googleIcon.png' height='30px'></img>
          <p1>Google</p1>
        </li>
        <li>
          <img src='/facebookIcon.png' height='30px'></img>
          <p1>Facebook</p1>
        </li>
        <li>
          <img src='/twitterIcon.png' height='30px'></img>
          <p1>Twitter</p1>
        </li>
        <li>
          <img src='/instagramIcon.png' height='30px'></img>
          <p1>Instagram</p1>
        </li>
      </div>
    </div>
  )
}

export default LoginFirstPage