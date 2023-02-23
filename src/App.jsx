import { Route, Routes } from "react-router-dom";

import NewbornPoster from "components/images/newborn/NewbornPoster";
import NewbornPoster2 from "components/images/newborn/NewbornPoster2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewbornPoster />} />
      <Route path="/newborn" element={<NewbornPoster />} />
      <Route path="/newborn/krok2" element={<NewbornPoster2 />} />
    </Routes>
  );
}

export default App;
