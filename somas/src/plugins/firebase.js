// API키와 같은 민감 정보를 secret_config.json 파일로 분리했습니다.
// secret_config.json 파일을 로드해서 코드에는 간접적으로 입력합니다.
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDocs, getFirestore } from "firebase/firestore"
const secret_config = require("../../../config/secret_config.json");

const firebaseConfig = {
    apiKey: secret_config.apiKey,
    authDomain: secret_config.authDomain,
    databaseURL: secret_config.databaseURL,
    projectId: secret_config.projectId,
    storageBucket: secret_config.storageBucket,
    messagingSenderId: secret_config.messagingSenderId,
    appId: secret_config.appId,
    measurementId: secret_config.measurementId
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);