import { CrewList } from "./components/CrewList/CrewList";
import { GoogleMapComponent } from "./components/GoogleMapComponent/GoogleMapComponent";
import { ISSLocation } from "./components/ISSLocation/ISSLocation";
import { TimeUTC } from "./components/TimeUTC/TimeUTC";
import { useISSData } from "./hooks/useISSData";
import "./App.css";
function App() {
  const { position, crew, error } = useISSData();

  return (
    <div className="container-app">
      <div className="location-box">
        <ISSLocation position={position} error={error} />
        {position && (
          <GoogleMapComponent
            latitude={position.latitude}
            longitude={position.longitude}
          />
        )}
      </div>
      <div className="time-and-crew-box">
        <TimeUTC />
        <CrewList crew={crew} />
      </div>
    </div>
  );
}

export default App;
