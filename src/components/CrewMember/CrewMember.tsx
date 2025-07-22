import type { FC } from "react";
import styles from "./CrewMember.module.css";
interface ICrewMemberProps {
  name: string;
}

export const CrewMember: FC<ICrewMemberProps> = ({ name }) => {
  return (
    <div className={styles.member}>
      <div className={styles.icon}></div>
      <p>{name}</p>
    </div>
  );
};
