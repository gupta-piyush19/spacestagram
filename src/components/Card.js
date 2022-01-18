import React, { useState } from "react";
import styles from "./Card.module.css";
import { GoCalendar } from "react-icons/go";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const Card = ({ data, liked, likePost, dislikePost }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.card_media}>
        {data.media_type === "image" ? (
          <img alt={data.title} src={data.url}></img>
        ) : (
          <iframe title={data.title} src={data.url}></iframe>
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
        <p className={styles.info}>
          <p className={styles.wrapping_info}>
            {data.explanation.substring(0, 120)}
          </p>
          <p className={`${styles.cc} ${readMore ? styles.hidden : ""}`}>
            {data.explanation.substring(120)}
          </p>
          <button
            className={styles.read_more}
            onClick={() => setReadMore(!readMore)}
          >
            Read Less
          </button>
          {/* {readMore ? (
            <>
              {data.explanation}
              <button
                className={styles.read_more}
                onClick={() => setReadMore(!readMore)}
              >
                Read Less
              </button>
            </>
          ) : (
            <>
              {data.explanation.substring(0, 120)}...
              <button
                className={styles.read_more}
                onClick={() => setReadMore(!readMore)}
              >
                Read More
              </button>
            </>
          )} */}
        </p>
        <button
          className={styles.icon}
          onClick={() => {
            liked ? dislikePost(data.title) : likePost(data.title);
          }}
        >
          {liked ? <BsFillHeartFill /> : <BsHeart />}
        </button>
      </div>
    </div>
  );
};

export default Card;
