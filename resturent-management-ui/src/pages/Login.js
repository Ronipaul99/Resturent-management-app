import {React , useContext , useState} from 'react'
import '../css/Auth.css'
import {Link} from 'react-router-dom'
import { LoginContext } from '../LoginContext'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';


export default function Login() {

  const {openLogin : isOpen , setopenLogin} = useContext(LoginContext)
  const [emailLogin, setemailLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [otp , setOtp] = useState('')
  const [timer , setTimer] = useState(60)
  const [resendOTP , setresendOTP] = useState(false)
  const [emailValidate , setemailValidate] = useState(false)
  const [phoneValidate , setphoneValidate] = useState(false)
  const [otpValidate , setotpValidate] = useState(false)
  const [loginContinue , setloginContinue] = useState(false)

  const startTimer = () =>{

  }

  const handleCloseDrawer = () => {
    setopenLogin(false)
    setloginContinue(false)
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
    validateEmail(e)
  }

  const handlePhoneChange = (e)=>{
    setPhone(e.target.value.replace(/[^0-9 ]/g, "").replace(" ","").slice(0,10))
    validatePhone(e)
  }

  const handleOtpChange = (e) =>{
    setOtp(e.target.value.replace(/[^0-9 ]/g, "").replace(" ","").slice(0,4))
    validateOTP(e)
  }
  const enableContinueButton = () =>{
    if(emailLogin){
      if(email!==''){
        return emailValidate
      }else return false
    }else{
      if(phone.length === 10){
        return phoneValidate
      }else return false
    }
  }

  const validateOTP = (e) => {
    setotpValidate(e.target.value.replace(/[^0-9 ]/g, "").replace(" ","").length===4)
  }
  
  const validateEmail = (e) => {
    setemailValidate(String(e.target.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ));
  }

  const validatePhone = (e) =>{
     setphoneValidate(e.target.value.replace(/[^0-9 ]/g, "").replace(" ","").length===10)
  }
  return (
    <div className='drawer-container' onClick={(e)=>{
      e.preventDefault()
      e.stopPropagation()
        // setopenLogin(false)
    }}>
      <div className='login-container' id='drawer'>
        <button className='close-button' >
          <CloseIcon style={{fontSize:'30px' , fontWeight: '200'}} onClick={handleCloseDrawer}/>
        </button>
       { 
        !loginContinue?
          <div className='login-card'>
            <h1 className='card-header'>Login</h1>
            <div>or &nbsp;<span className='card-text text-green text-button'>create account</span></div>
            {!emailLogin?
              <div className='input-group'>
                <input className='input' type='text' placeholder='Enter your mobile number' value={phone} onChange={handlePhoneChange}/>
                {phoneValidate && <CheckCircleIcon className='input-icon'/>}
              </div>
              :
              <div className='input-group'>
                <input className='input' type='text' placeholder='Enter your Email' value={email} onChange={handleEmailChange}/>
                {emailValidate && <CheckCircleIcon className='input-icon'/>}
              </div>  
              }
            <div className='button-group'>
              <button 
                className={enableContinueButton()?'button button-success':'button button-disable'} 
                onClick={()=>{setloginContinue(true)}} 
                disabled={!enableContinueButton()}
              >
                  Login
                </button>
              {
                emailLogin?
                <button className='button button-underline' onClick={()=>{setemailLogin(false)}}>Continue with phone</button>
                :
                <button className='button button-underline' onClick={()=>{setemailLogin(true)}}>Continue with email</button>

              }
              
            </div>
          </div>
          :
          <div className='login-card'>
            <h1 className='card-header'>Enter OTP</h1>
            <div>We've sent an OTP to your registered mobile number</div>
            {!emailLogin?
              <div className='input-group'>
                <input className='input disabled-input input-space-between' type='text' placeholder='Enter your mobile number' value={phone} onChange={handlePhoneChange} disabled/>
                {phoneValidate && <EditIcon className='edit-icon-input text-button'  onClick={()=>{setloginContinue(false)}}/>}
              </div>
              :
              <div className='input-group'>
                <input className='input disabled-input input-space-between' type='text' placeholder='Enter your Email' value={email} onChange={handleEmailChange} disabled/>
                {emailValidate && <EditIcon className='edit-icon-input text-button'  onClick={()=>{setloginContinue(false)}}/>}
              </div>  
              }
              {/* otp input */}
              <div className='input-group'>
                <input className='input input-space-between' type='text' placeholder='Enter OTP' value={otp} onChange={handleOtpChange}/>
              </div>  
            <div className='button-group'>
              <button className={otpValidate?'button button-success':'button button-disable'} disabled={otpValidate}>Verify OTP</button>
              {
                !resendOTP?
                <button className='button button-underline' disabled>Resend OTP in 00:34</button>
                :
                <button className='button button-underline' onClick={()=>{setresendOTP(false)}}>Resend OTP</button>

              }
              
            </div>
          </div>

        }
        <div className='text-help'>
          Having trouble? visit our <span className='text-link text-button'>Help center</span>
        </div>
      </div>
    </div>
      
    //  </div>
       
  )
}

