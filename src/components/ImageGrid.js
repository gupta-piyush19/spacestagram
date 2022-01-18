import React from "react";
import Masonry from "react-masonry-css";
import { useFetch } from "../utils/useFetch";
import { useLocalStorage } from "../utils/useLocalStorage";
import Card from "./Card";
import styles from "./ImageGrid.module.css";
import Loader from "./Loader";

const ImageGrid = () => {
  const [data, loading, error] = useFetch();
  const [liked, setLiked] = useLocalStorage("liked", []);

  const likePost = (title) => {
    const s = new Set([...liked, title]);
    setLiked(Array.from(s));
  };
  const dislikePost = (title) => {
    const posts = liked.filter((post) => post !== title);
    const s = new Set([...posts]);
    setLiked(Array.from(s));
  };

  const breakpointColumnsObj = {
    default: 2,
    1300: 2,
    768: 1,
  };
  console.log(data);
  if (error) return <h1>Something is Wrong in fetching the data.</h1>;
  if (loading) return <Loader />;
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {data?.map((e, idx) => (
          <Card
            key={e.title}
            data={e}
            liked={liked?.includes(e.title)}
            likePost={likePost}
            dislikePost={dislikePost}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGrid;
