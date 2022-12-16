import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AuthPage from '../components/auth/AuthPage'
import Input from '../components/elements/Input';
import Select from '../components/elements/Select';
import Checkbox from '../components/elements/Checkbox';
import Radio from '../components/elements/Radio';
import Button from '../components/elements/Button';
import Authentication from '../modules/Authentication';
import UserApiClient from '../modules/UserApiClient';
import './reactCOIServiceWorker';

import { useEffect, useState } from "react";
import axios from 'axios';

export default function AddRank() {
  let [state, setState] = useState({
    addSuccess: false,
    addAttempt: false,
    addMessage: null
  });

  const addClicked = async (event: any) => {
    var address = Authentication.address != "" ? Authentication.address : "B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
    setState({ ...state, addMessage: null });

    event.preventDefault();
    const { martialArt, rank } = event.target.elements;
    console.log("ma more times" + martialArt);
    const result: any = await UserApiClient().addMartialArt(address, martialArt.options[martialArt.selectedIndex].text, martialArt.value, rank.value);
    console.log("rank result", result);
    setState({ ...state, addAttempt: true, addSuccess: result.success, addMessage: result.message })
  };


  return (


    <AuthPage>

      <section className="section">
        <div className="container">
          <div className="section-inner">
            <div className="section-header">
              <div className="container-xs">
                <h2 className="mt-0 mb-16">Add Martial Art and Rank</h2>
              </div>
            </div>
            <div>
              {true ?
                <form onSubmit={addClicked}>
                  <fieldset>
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
