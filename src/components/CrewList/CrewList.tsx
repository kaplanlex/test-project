import { CrewMember } from "../CrewMember/CrewMember";
import type { FC } from "react";
import styles from "./CrewList.module.css";

interface ICrewListProps {
  crew: string[];
}

export const CrewList: FC<ICrewListProps> = ({ crew }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.members}>
        {crew.map((name) => (
          <CrewMember key={name} name={name} />
        ))}
      </div>
      <p className={styles.total}>Total amount: {crew.length} people on ISS</p>
    </div>
  );
};
