import Link from 'next/link';
import React from 'react';
import RankItem from './partials/RankItem';
import { useEffect, useState } from "react";
import { app, database } from '../../modules/firestore';
import { doc, getDoc } from 'firebase/firestore';
import Authentication from '../../modules/Authentication';
import { Rank } from '../../modules/Rank';

const RankTiles = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [maCount, setMaCount] = useState(0);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    (async () => {
      var address = Authentication.address != "" ? Authentication.address :"B62qpzAWcbZSjzQH9hiTKvHbDx1eCsmRR7dDzK2DuYjRT2sTyW9vSpR";
      const docRef = doc(database, "users", address);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const ma = docSnap.data().martialArts;
        setIsLoaded(true);
        setItems(ma);
        setMaCount(ma.length);
        setError(ma.length > 0 ? null : "Could not find any Martial Arts. Click the plus button to add one.");
      } else {
        setIsLoaded(true);
        setError("Could not find any Martial Arts. Click the plus button to add one.");
      }
    })();
  }, []);

  
  const checkedVerification = function(rank, verfied) {
    console.log("verified ", rank.martialArt, verfied);
    setVerifying(false);
  }
  const verifyingCallback = function(rank) {
    console.log("verifying ", rank.martialArt);
    setVerifying(true);
  }
    return (
        <section className="section">
            <div className="container">
                <div className="section-inner">
                  <div className='rank-messages'>
                    {!isLoaded && 
                      <div className="loading-snarky m-0 mb-32 reveal-from-bottom login-subtext p-16"  data-reveal-delay="400">
                        Loading Martial Arts...
                      </div>
                    }
                    {isLoaded && (maCount == 0 || error != null) && 
                      <div className="m-0 mb-32 reveal-from-bottom login-subtext p-16"  data-reveal-delay="400">
                        {error}
                      </div>
                    }
                    {verifying && 
                      <div className="loading-snarky m-0 mb-32 reveal-from-bottom login-subtext p-16"  data-reveal-delay="400">
                        Verifying Martial Arts on Mina...
                      </div>
                    }
                  </div>
                    <div className="tiles-wrap">
                        {items.map((i, index) => (
                    <RankItem key={index} verifyingCallback={verifyingCallback} verifiedCallback={checkedVerification} martialArtShortName={i.martialArtShortName} rank={i.rank} martialArt={i.martialArt} certified={i.certified} />
                        
                        ))}


                        <Link href="addrank">
                            <div className="tiles-item" title='Add new Martial Art'>
                                <div className="ma-add-btn">
                                    <div className='pl-8 pt-8 text-sm'>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RankTiles;