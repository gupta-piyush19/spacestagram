import React, { useState } from "react";
import styles from "./Card.module.css";
import { GoCalendar } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";

const Card = ({ data, liked, likePost, dislikePost }) => {
  const [readMore, setReadMore] = useState(false);
  const [copy, setCopy] = useState(false);

  const copyHandler = (value) => {
    setCopy(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

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
          <p
            className={styles.wrapping_info}
            style={{
              maxHeight: readMore ? "1500px" : "100px",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {data.explanation}
          </p>
          <button
            className={styles.read_more}
            onClick={() => setReadMore(!readMore)}
          >
            Read {readMore ? "Less" : "More"}
          </button>
        </p>
        <div className={styles.button_container}>
          <button
            className={styles.like_icon}
            onClick={() => {
              liked ? dislikePost(data.title) : likePost(data.title);
            }}
          >
            <AiFillHeart
              size={40}
              title="heart"
              style={{
                color: liked ? "#bb0a1e" : "#fff",
              }}
            />
          </button>
          <button
            className={styles.copy_icon}
            onClick={() => {
              copyHandler(data.url);
            }}
          >
            {copy ? (
              <BsClipboardCheck
                size={35}
                title="copy to clipboard"
                style={{
                  transition: "all 0.5s ease-in",
                }}
              />
            ) : (
              <BsClipboard
                size={35}
                title="copy to clipboard"
                style={{
                  transition: "all 0.5s ease-in",
                }}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
