import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDwHp1oT9W7VK8Tvgm25imCLr5fQMZV7Tg",
    authDomain: "tanchiachun-com.firebaseapp.com",
    projectId: "tanchiachun-com",
    storageBucket: "tanchiachun-com.appspot.com",
    messagingSenderId: "449686190019",
    appId: "1:449686190019:web:6bd3b3fe1d8f54a200ef76",
    measurementId: "G-97ZKSXHVGQ"
};

export const app = initializeApp(firebaseConfig);