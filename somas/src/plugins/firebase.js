// API키와 같은 민감 정보를 secretConfig.json 파일로 분리했습니다.
// secretConfig.json 파일을 로드해서 코드에는 간접적으로 입력합니다.
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const secretConfig = require('../../config/secret_config.json');

const firebaseConfig = {
  apiKey: secretConfig.apiKey,
  authDomain: secretConfig.authDomain,
  databaseURL: secretConfig.databaseURL,
  projectId: secretConfig.projectId,
  storageBucket: secretConfig.storageBucket,
  messagingSenderId: secretConfig.messagingSenderId,
  appId: secretConfig.appId,
  measurementId: secretConfig.measurementId,
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // 파이어베이스 실시간 데이터베이스
export const storage = getStorage(app); // 파이어베이스 스토리지
