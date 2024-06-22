'use client';
import Image from 'next/image';
import './page.css';
import { useState } from "react";
import { signIn } from 'next-auth/react';
export default function LoginPage(){

    
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [loginInProgress,setLoginInProgress]=useState(false);
    
    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true);

        await signIn('Credentials',{email,password,callbackUrl:'/'});

        setLoginInProgress(false);
    }
    return(
        <>
        <img  className='login-background' src="images/Sign In.svg" alt="Menu"/>
        <img className="chef" src="images/chef1.svg" alt="chef" />
        <div className='text'>Welcome back to your culinary sanctuary</div>
        <section className="mt-8 section">
           
        
        <form className='block max-w-xl px-5 pt-5 pb-5 mx-auto mt-40 bg-white rounded-xl' onSubmit={handleFormSubmit}>
       
  
        {/* <<h1 className="mb-6 text-4xl text-center text-primary">
            Login
        </h1>> */}

        <b><div className='mb-6 text-4xl text-center text-primary login-text'>Login</div></b>
                <input type='email' name='email' placeholder="Email" value={email}
                disabled={loginInProgress}
                onChange={ev=>setEmail(ev.target.value)}
                />
                <input type="password" name='password' placeholder="Password" value={password}
                disabled={loginInProgress}
                onChange={ev=>setPassword(ev.target.value)}
                />
                 <button type="submit" disabled={loginInProgress}>Login</button>
                 <img className="separator" src="images/Separator.svg" alt="separator" />
                <button type='button' onClick={()=>signIn('google',{callbackUrl:'/'})}
                className='flex justify-center gap-4 login-with-google'>
                    
                    <Image src='images/google.svg' alt='google' width={24} height={24}/>
                    Login with google
                </button>
                
        </form>
        </section>
        </>
      
    );
}