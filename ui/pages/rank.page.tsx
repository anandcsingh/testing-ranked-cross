import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import RankTiles from '../components/sections/RankTiles';
import './reactCOIServiceWorker';


export default function Rank() {

  return (

    <AuthPage>
      <RankTiles />
    </AuthPage>

  )

}
