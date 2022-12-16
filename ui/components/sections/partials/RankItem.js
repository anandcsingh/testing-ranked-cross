import React from 'react';
import PropTypes from 'prop-types';
import Authentication from '../../../modules/Authentication';
import { Rank } from '../../../modules/Rank';
import {RankedV1ContractVerifier} from '../../../modules/RankedV1ContractVerifier';
import { state } from 'snarkyjs';
import { useEffect, useState } from "react";

const propTypes = {
    martialArtShortName: PropTypes.string,
    rank: PropTypes.string,
    martialArt: PropTypes.string,
    certified: PropTypes.bool,
    verifiedCallback: PropTypes.func,
    verifyingCallback: PropTypes.func
  }
  
  const defaultProps = {
    martialArtShortName: '',
    rank: '',
    martialArt: '',
    certified: false,
    verifiedCallback: null,
    verifyingCallback: null
  }

const RankItem = ({
    martialArtShortName,
    rank,
    martialArt,
    certified,
    verifiedCallback,
    verifyingCallback,
    ...props
  }) => {

    let [veri, setVerfied] = useState(false);

    useEffect(() => {
      (async () => {
    const rankVerifier = new RankedV1ContractVerifier(Authentication.zkClient);
    const ma = new Rank();
    ma.address = Authentication.address;
    ma.martialArt = martialArtShortName;
    ma.rank = rank; 

    verifyingCallback(ma);
    const verified = await rankVerifier.verify(ma);
    verifiedCallback(ma, verified);
    console.log(ma.martialArt, ":", verified);
    setVerfied(verified);
    const verifiedClasses = verified ? "verified-ma" : "unverified-ma";
    const verifiedCheckClasses = verified ? "check" : "uncheck";
    
  })();
}, []);
    return (
        <div className="tiles-item">
            <div className={veri ? "verified-ma" : "unverified-ma"}>
              <div className={martialArtShortName}>
                <div className={`pl-8 pt-8  ${veri ?  "check" : "uncheck"}`}>
                    <div className='mt-auto mb-8'>
                    <div className="mt-24 fw-500 tt-u">{rank}</div>
                    <div className="text-xs">{martialArt}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default RankItem;
