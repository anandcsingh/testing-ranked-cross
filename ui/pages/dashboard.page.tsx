import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/layout/Header'
import AuthenticatedPage from '../components/auth/AuthenticatedPage'
import RankTiles from '../components/sections/RankTiles';
import './reactCOIServiceWorker';


export default function Home() {

  return (
    
      
      <AuthenticatedPage>
        <div>
          <Header hideExtraNav={false} navPosition="right" className="reveal-from-bottom" hideNav={false} hideSignin={false} bottomOuterDivider={false} bottomDivider={false}  />
          <main className="site-content">
            <RankTiles />
          </main>
        </div>
      </AuthenticatedPage>
    
  )

}
