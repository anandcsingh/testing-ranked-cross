import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero';
import './reactCOIServiceWorker';
import Script from 'next/script'


export default function Welcome() {
  return (
    <>
      <div className='keito-page'>
      
      
        <div className='keito-content-wrap'>
          <Header hideExtraNav={true} navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={false} bottomOuterDivider={false} bottomDivider={false} />
          <main className="site-content">
            <Hero className="illustration-section-01" topOuterDivider={null} bottomOuterDivider={false} topDivider={false} bottomDivider={false} hasBgColor={false} invertColor={false} />
          </main>
        </div>
        <Footer className="footer-container" topOuterDivider={false} topDivider={false} />
      </div>
    </>
  )
}
