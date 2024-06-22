'use client';
import Image from 'next/image';
import './page.css';
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';


export default function RegisterPage() {

  
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [userCreated,setUserCreated]=useState(false);
    const [creatingUser,setCreatingUser]=useState(false);
    const [error,setError]=useState(false);

    async function handleFormSubmit(ev){
        ev.preventDefault();
        setCreatingUser(true);
        setUserCreated(false);
        setError(false);

            const response = await fetch('/api/register',{
                method:'POST',
                body:JSON.stringify({email,password,callbackUrl:'/'}),
                headers:{'Content-Type':'application/json'},
            });
            if(response.ok){
                setUserCreated(true);
            }
            else{
                setError(true);
            }
           
            setCreatingUser(false);
 
    }
    return (
        <>
        <img className="register-background" src="images/Sign Up.svg" alt="signup" />
        <img className="chef" src="images/chef1.svg" alt="chef" />
        <div className='text'>Elevate your dining experience, with every delivery</div>
        
        <section className="mt-10 section">
            
            {userCreated && (
                <div className='my-4 text-center'>User Created.<br/>
                 Now you can{" "} <Link className='underline' href={'/login'}>Login &raquo;</Link></div>
            )}
            {error && (
                <div className='my-4 text-center'>An error has occured.<br/>
                Please try again later
                </div>
            )}
            <form className='block max-w-xl px-5 pt-5 pb-5 mx-auto mt-40 bg-white rounded-xl' onSubmit={handleFormSubmit}>
            <h1 className="mb-6 text-4xl text-center text-primary">
                Register
            </h1>
                <input type='email' placeholder="Email" value={email}
                disabled={creatingUser}
                onChange={ev=>setEmail(ev.target.value)}
                />
                <input type="password" placeholder="Password" value={password}
                disabled={creatingUser}
                onChange={ev=>setPassword(ev.target.value)}
                />
                <button type="submit" disabled={creatingUser}>Register</button>
                <img className="separator" src="images/Separator.svg" alt="separator" />
                <button  type='button' onClick={()=>signIn('google',{callbackUrl:'/'})}
                 className='flex justify-center gap-4 register-with-google'>
                    <Image src='images/google.svg' alt='google' width={24} height={24}/>
                    Login with google
                </button>
                <div className='pt-4 my-4 text-center text-gray-500 border-t'>Existing Account?{' '} <Link className='underline' href={'/login'}>Login here &raquo;</Link></div>

            </form>

        </section>
        </>
    )
}