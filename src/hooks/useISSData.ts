import { getISSPosition, getPeopleInSpace } from "../api/issApi";
import { useEffect, useState } from "react";

import type { IPersonInSpace } from "../api/issApi";

interface IPosition {
  latitude: number;
  longitude: number;
}

export const useISSData = () => {
  const [position, setPosition] = useState<IPosition | null>(null);
  const [crew, setCrew] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const [posData, peopleData] = await Promise.all([
        getISSPosition(),
        getPeopleInSpace(),
      ]);

      const latitude = parseFloat(posData.iss_position.latitude);
      const longitude = parseFloat(posData.iss_position.longitude);

      const people: IPersonInSpace[] = peopleData.people;

      const issCrew = people
        .filter((person) => person.craft === "ISS")
        .map((person) => person.name);

      setPosition({ latitude, longitude });
      setCrew(issCrew);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch ISS data:", err);
      setError("Failed to load data");
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { position, crew, error };
};
