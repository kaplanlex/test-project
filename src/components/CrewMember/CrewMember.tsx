import type { FC } from "react";
import styles from "./CrewMember.module.css";

interface ICrewMemberProps {
  name: string;
}

export const CrewMember: FC<ICrewMemberProps> = ({ name }) => {
  return (
    <div className={styles.member}>
      <div className={styles.iconWrapper}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5Zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5Z" />
        </svg>
      </div>
      <p>{name}</p>
    </div>
  );
};
