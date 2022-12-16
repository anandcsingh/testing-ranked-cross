import axios from "axios";

import { app, database } from '../modules/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const UserApiClient = function () {
    return {
        addMartialArt: async function (address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("begin add ma here Address " + address);
            const docRef = doc(database, "users", address);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank, false);
            } else {
                console.log("NO Document data:");

                return createEmptyUser(address, martialArt, martialArtShortName, rank);
            }
        },
        getUser: async function (address) {
            var user = null;
            console.log("Address " + address);

            await axios.get(`api/user/${address}`)
                .then(r => user = r.data)
                .catch(e => console.log(e.message));

            return user;
        },
        promoteStudent: async function (address, martialArt, martialArtShortName, rank) {
            var user = null;
            console.log("promo");
            const docRef = doc(database, "users", address);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                user = docSnap.data();
                return addIfNotThere(user, address, martialArt, martialArtShortName, rank, true);
            }
            else {
                let result = {};
                result.success = false;
                result.message = `Student not found with address ${address}. Ensure you entered the correct address or ask the student to join Ranked.`;
                return result;
            }
        }
    };
    async function createEmptyUser(address, martialArt, martialArtShortName, rank) {
        let result = {};

        try {
            const docRef = doc(database, "users", address);
            const data = {
                address,
                martialArts: [{ martialArt, rank, martialArtShortName, certified: false }]
            }
            const docSnap = await getDoc(docRef);
            await setDoc(docRef, data);
            console.log("first add");
            result.success = true;
            result.message = `Martial Art ${martialArt} and rank ${rank} added.`;
        }
        catch (error) {
            result.success = false;
            result.message = error.message;
        }

        return result;
    };
    async function addIfNotThere(user, address, martialArt, martialArtShortName, rank, allowUpdate) {
        let result = {};
        try {
            var found = false;
            var foundMaIndex = -1;
            console.log("adding if not there");
            if (!user.martialArts) {
                user.martialArts = [];
            }
            for (var i = 0; i < user.martialArts?.length; i++) {
                if (user.martialArts[i].martialArt == martialArt) {
                    found = true;
                    foundMaIndex = i;
                }
            }
            if (!found) {
                user.martialArts.push({ martialArt, rank, martialArtShortName, certified: false });
            }
            else if (found && allowUpdate) {
                user.martialArts[foundMaIndex] = { martialArt, rank, martialArtShortName, certified: false };
            }
            else {
                result.success = false;
                result.message = `Martial Art ${martialArt} already added, you can only get promoted by a qualifed instructor.`;
            }
            const docRef = doc(database, "users", address);

            const docSnap = await getDoc(docRef);
            await setDoc(docRef, user);
            result.success = true;
            result.message = allowUpdate ? result.message = `Student ${address} promoted to ${rank} in Martial Art ${martialArt}.` : result.message;

        }
        catch (error) {
            result.success = false;
            result.message = error.message;
        }

        return result;

        await axios.put(`api/user/${address}`, user)
            .then((response) => {
                if (response.status == 200) {
                    result.success = true;
                    result.message = `Martial Art ${martialArt} and rank ${rank} added.`;
                }
                else {
                    result.success = false;
                    result.message = response.statusText
                }
            })
            .catch((error) => {
                result.success = false;
                result.message = error.message;
            });

        return result;
    };
};

export default UserApiClient;