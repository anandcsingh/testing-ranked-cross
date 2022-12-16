import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/Header'
import AuthenticatedPage from '../components/auth/AuthenticatedPage'
import RankTiles from '../components/sections/RankTiles';
import Authentication from '../modules/Authentication';
import Router from 'next/router';
import './reactCOIServiceWorker';

export default function Login() {
  
  const loginClicked = () => {
    const loggedIn = Authentication.login();
    if(Authentication.loggedIn) {
      Router.push('/dashboard')
    }
  }
  return (
    <>
    <Header hideExtraNav={true} navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={true} bottomOuterDivider={false} bottomDivider={false} />
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
              <a className='login-btn button button-primary' href="#" onClick={loginClicked}>
                Login 
            </a>
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
