import "./App.css";

import { CrewList } from "./components/CrewList/CrewList";
import { GoogleMapComponent } from "./components/GoogleMapComponent/GoogleMapComponent";
import { ISSLocation } from "./components/ISSLocation/ISSLocation";
import { TimeUTC } from "./components/TimeUTC/TimeUTC";
import { useISSData } from "./hooks/useISSData";
function App() {
  const { position, crew, error } = useISSData();

  return (
    <div className="container-app">
      <div className="item-container left">
        <ISSLocation position={position} error={error} />
      </div>

      <div className="item-container right">
        <TimeUTC />
      </div>
      <div className="item-container map left">
        {position && (
          <GoogleMapComponent
            latitude={position.latitude}
            longitude={position.longitude}
          />
        )}
      </div>

      <div className="item-container right">
        <CrewList crew={crew} />
      </div>
    </div>
  );
}

export default App;
