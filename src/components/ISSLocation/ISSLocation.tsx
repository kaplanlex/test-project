import type { FC } from "react";
import styles from "./ISSLocation.module.css";

interface IISSLocationProps {
  position: { latitude: number; longitude: number } | null;
  error: string | null;
}

export const ISSLocation: FC<IISSLocationProps> = ({ position, error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!position) {
    return <p>Loading ISS coordinates...</p>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>ISS is now located at:</p>
      <p className={styles.coordinates}>
        longitude: {position.longitude.toFixed(4)}, latitude:
        {position.latitude.toFixed(4)}
      </p>
    </div>
  );
};
