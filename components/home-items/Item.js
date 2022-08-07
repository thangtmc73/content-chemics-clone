import { useState } from "react";
import className from "utils/className";
import styles from "./HomeItems.module.scss";

export default function Item({ title, description, videoSource }) {
  const [hovering, setHovering] = useState(false);
  const handleMouseOver = () => {
    console.log("hovering");
    // setHovering(true);
  };

  const handleMouseOut = () => {
    // setHovering(false);
  };

  return (
    <li
      className={className(styles.item, hovering && styles.hovering)}
      key={title}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.videoContainer}>
        <video
          playsInline={true}
          preload="auto"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.loopContainer}>
        <div className={styles.loopContent}>
          <div className={styles.loopItem}>
            <span>{title}</span>
            <span className={styles.description}>{description}</span>
          </div>
          <div className={styles.loopItem}>
            <span>{title}</span>
            <span className={styles.description}>{description}</span>
          </div>
          <div className={styles.loopItem}>
            <span>{title}</span>
            <span className={styles.description}>{description}</span>
          </div>
          <div className={styles.loopItem}>
            <span>{title}</span>
            <span className={styles.description}>{description}</span>
          </div>
          <div className={styles.loopItem}>
            <span>{title}</span>
            <span className={styles.description}>{description}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
