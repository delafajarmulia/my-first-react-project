import axios from 'axios'
import React, { useState } from 'react'
import base_url from '../api/Api'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const submit = async () => {
        if(email == ''|| password == ''){
            alert('masukkan data dengan lengkap')
            return
        }

        try {    
            const resultLogin = await axios.post(`${base_url}/auth/login`, {
                email: email, 
                password:password
            })
            
            setToken(resultLogin.data.data.token)
            // console.log(token)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div id='login' className='pt-40 mt-[-10px] text-center mx-auto md:rounded-2xl md:mt-32 h-screen sm:h-auto md:bg-slate-200 md:p-14 md:w-96 relative'>
                <h1 className='text-2xl font-semibold'>Login</h1>
                <input 
                    type="email"
                    label='email'
                    onChange={e=>setEmail(e.target.value)}
                    className='w-11/12 h-8 rounded pl-2 mt-7 pb-1 text-sm'
                />
                <input 
                    type="password" 
                    label={'password'}
                    onChange={e=>setPassword(e.target.value)}
                    className='w-11/12 h-8 rounded pl-2 mt-3 pb-1 text-sm'
                />
                <button onClick={submit} className="w-11/12 h-8 bg-primary mt-5 text-white rounded">
                    Login
                </button>
            </div>
        </>
    )
}

export default Login