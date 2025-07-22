import { useEffect, useState } from "react";
import styles from "./TimeUTC.module.css";
import type { FC } from "react";

export const TimeUTC: FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();

      const utcHours = now.getUTCHours().toString().padStart(2, "0");
      const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
      setTime(`${utcHours}:${utcMinutes}`);

      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      };
      const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
        now
      );
      setDate(formattedDate);
    };

    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.time}>Current UTC time: {time}</p>
      <p className={styles.date}>{date}</p>
    </div>
  );
};
