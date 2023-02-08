import getConutry from "./api/fetch";
import Country from "./components/Country";
import HightLight from "./components/HightLight";
import Summary from "./components/Summary";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    getConutry().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <Country />
        <HightLight />
        <Summary />
      </div>
    </div>
  );
};

export default App;
