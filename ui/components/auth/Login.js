import Header from '../layout/Header'
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Authentication from '../../modules/Authentication';
import React, { useState, useRef, useEffect } from 'react';


const Login = () => {
    const loginClicked = (e) => {
        const loggedIn = Authentication.login();
        if(Authentication.loggedIn) {
            useEffect(() => {
                const router = useRouter()
                router.push('dashboard')
                console.log("logged refreshed?");
              });
        }
      } 

    return (
        <>
        <Header navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={true} bottomOuterDivider={false} bottomDivider={false} />
      <main className="site-content">
      <section className="hero section center-content has-top-divider"
    >
      <div className="container-sm">
        <div className="hero-inner section-inner">
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Login to <span className="text-color-primary">keito</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Login into to the <span className="text-color-primary">keito</span> zkapp with your Mina wallet
               </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <a className='login-btn button button-primary' href="#" onClick={loginClicked}>
                    Login 
                </a>
                  
                </ButtonGroup>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
      </main>
        </>
        

    );
}

export default Login;
