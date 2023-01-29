import "App.css";
import Posters from "layouts/images/Posters";
import PosterView from "components/images/newborn/PosterView";
import PosterConfig from "components/images/newborn/PosterConfig";

function App() {
  return (
    <div className="App">
      <Posters>
        <PosterView />
        <PosterConfig />
      </Posters>
    </div>
  );
}

export default App;
