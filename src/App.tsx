import { useState, useEffect } from "react";
import "./App.css";
import { logEvent } from "firebase/analytics";
import firebaseAnalytics from "./firebase/init";

function App() {

	useEffect(() => {	
		logEvent(firebaseAnalytics, "page_view")
	}, [])
	
  return (
    <>
      <main>
        <div className="flex w-full items-center h-screen font-bold text-6xl relative">
					<div className="grow text-end">
						<p>PORT</p>
						<p>FRAN</p>
						<p>RAVE</p>
					</div>
					<div className="grow">
						<p>FOLIO</p>
						<p>SEDO</p>
						<p>LINO</p>
					</div>
					<button className="absolute left-1/2 -translate-x-1/2 bottom-72">START</button>
				</div>
      </main>
    </>
  );
}

export default App;
