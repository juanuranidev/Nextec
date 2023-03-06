import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASvu6khd18swu2Q4zbBvg-B0D6lmmcgwo",
  authDomain: "tienda-electronica-61e80.firebaseapp.com",
  projectId: "tienda-electronica-61e80",
  storageBucket: "tienda-electronica-61e80.appspot.com",
  messagingSenderId: "1066442380740",
  appId: "1:1066442380740:web:7d81ad4061b951ff584091",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
