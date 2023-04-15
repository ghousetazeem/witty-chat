import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `mx-auto text-center static h-[100vh]`,
  sectionContainer: `flex flex-col h-[90vh] static`,
};

function App() {

  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
        {/* Chat Component */}
      </section>
    </div>
  )
}

export default App
