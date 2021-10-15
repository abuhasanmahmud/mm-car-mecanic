import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const firebsaeInitilization=()=>{
    initializeApp(firebaseConfig);
}

export default firebsaeInitilization;