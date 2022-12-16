import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import RankTiles from '../components/sections/RankTiles';
import './reactCOIServiceWorker';
import { useEffect, useState } from "react";
import Authentication from '../modules/Authentication';
import { RankedV1ContractVerifier } from '../modules/RankedV1ContractVerifier';
import { Rank } from '../modules/Rank';
import ZkappWorkerClient from './rankedWorkerClient';

import {
  CircuitString,
  Poseidon,
  PublicKey,
} from 'snarkyjs'
import UserApiClient from '../modules/UserApiClient';


export default function Students() {
  let [state, setState] = useState({
    zkappWorkerClient: Authentication.zkClient,
    addSuccess: false,
    addAttempt: false,
    addMessage: null
  });

  const promoteStudent = async (event: any) => {
    setState({ ...state, addMessage: null });
    
    var address = Authentication.address != "" ? Authentication.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";

    event.preventDefault();
    const { martialArt, rank, student } = event.target.elements;
    const rankVerifier = new RankedV1ContractVerifier(Authentication.zkClient);
    const cert = PublicKey.fromBase58(address);
    const ma = new Rank();
    ma.address = PublicKey.fromBase58(student.value);
    ma.martialArt = martialArt.value;
    ma.rank = rank.value;
    console.log("address " + ma.address.toBase58());
    console.log("martialArt " + ma.martialArt);
    console.log("rank " + ma.rank);

    const result = await rankVerifier.promote(cert, ma);
    console.log(result);
    //const result: any = await UserApiClient().promoteStudent(address, martialArt.options[martialArt.selectedIndex].text, martialArt.value, rank.value);
    //console.log(result);
    setState({ ...state, addAttempt: true, addSuccess: result!.success, addMessage: result!.message })
  };
  return (


    <AuthPage>

      <section className="section">
        <div className="container">
          <div className="section-inner">
            <div className="section-header">
              <div className="container-xs">
                <h2 className="mt-0 mb-16">Promote your student</h2>
              </div>
            </div>
            <div>
              {true ?
                <form onSubmit={promoteStudent}>
                  <fieldset>
                    <div className="mb-16">
                      <label className="form-label" htmlFor="student">Student Address</label>
                      <input type="text" id="student" name="student" className='form-input' />
                    </div>
                    <div className="mb-16">
                      <label className="form-label" htmlFor="martialArt">Martial Art</label>
                      <select id="martialArt" name='martialArt' className="form-select">
                        <option hidden={true}>Choose your Martial Art</option>
                        <option value="ibjjf">Brazilian Jiu Jitsu</option>
                        <option value="itf">Taekwon-Do</option>
                        <option value="wkf">Karate</option>
                      </select>
                    </div>
                    <div className="mb-16">
                      <label className="form-label" htmlFor="rank">Rank</label>
                      <select id="rank" name='rank' className="form-select">
                        <option hidden>Choose your Rank</option>
                        <option>White Belt</option>
                        <option>Yellow Belt</option>
                        <option>Green Belt</option>
                        <option>Blue Belt</option>
                        <option>Purple Belt</option>
                        <option>Brown Belt</option>
                        <option>Black Belt</option>
                        <option>Coral Belt</option>
                      </select>
                    </div>
                    <div className="mt-24">
                      <div className="button-group">
                        <button type='submit' className="button button-primary button-wide-mobile">Submit</button>
                        <Link href="rank" className="button-link text-xs">Cancel</Link>
                      </div>
                      {state.addAttempt && state.addMessage != null &&
                        <div className='form-hint'>{state.addMessage}</div>
                      }
                    </div>
                  </fieldset>
                </form>
                :
                <h3></h3>
              }
            </div>
          </div>
        </div>
      </section>
    </AuthPage>

  )

}
