import React from "react";
import styles from "./Card.module.css";
import { GoCalendar } from "react-icons/go";
const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_media}>
        {data.media_type === "image" ? (
          <img src={data.url}></img>
        ) : (
          <iframe src={data.url}></iframe>
        )}
      </div>
      <div className={styles.card_info}>
        <div className={styles.head}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.date}>
            <GoCalendar />
            {data.date}
          </p>
        </div>
        {data.copyright ? (
          <p className={styles.author}>By: {data.copyright}</p>
        ) : null}
        <p className={styles.info}>{data.explanation}</p>
      </div>
    </div>
  );
};

export default Card;
