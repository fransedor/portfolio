import { useEffect } from "react";
import "./App.css";
import { logEvent } from "firebase/analytics";
import firebaseAnalytics from "./firebase/init";
import "./animations/animation.css"
import IntroPage from "./components/IntroPage";

function App() {
  useEffect(() => {
    logEvent(firebaseAnalytics, "page_view");
  }, []);

  return (
    <>
      <main>
				<IntroPage></IntroPage>
      </main>
    </>
  );
}

export default App;
