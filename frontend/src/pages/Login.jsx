import React, { useState } from 'react'

const Login = () => {

  const [state,setState] = useState('Sign Up')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')

  const onSubmitHandler = async (event)=> {
    event.preventDefault()

  }


  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold text-primary'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "Login"} to book an appointment</p>
        {
          state === "Sign Up" && <><div className='w-full'>
            <p>First Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setFname(e.target.fname)} value={fname} required />
          </div><div className='w-full'>
              <p>Last Name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setLname(e.target.lname)} value={lname} required />
            </div> </>
        }
        
        <div  className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.email)} value={email} required/>
        </div>
        <div  className='w-full'>
          <p>Paasword</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.password)} value={password} required/>
        </div>
        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer font-bold'>Login here</span></p>
            : <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer font-bold'>click here</span></p>
        }
      </div>
      
    </form>
  )
}

export default Login
