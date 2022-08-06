import { useState, useEffect, useRef } from "react";
import className from "utils/className";
import styles from "./Overlay.module.scss";

function Overlay({ leftText, rightText, animationTexts }) {
  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const timeoutRef = useRef(null);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
      setVisible(true);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (activeIndex === animationTexts.length - 1) {
        setVisible(false);
        return;
      }
      setActiveIndex((index) => index + 1);
    }, 1000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, animationTexts]);

  return (
    <div className={className(styles.container, !visible && styles.hide)}>
      <div className={styles.content}>
        <p className={styles.bigText}>{leftText}</p>
        <div
          className={styles.animationView}
          style={{
            width: `${
              (animationTexts[activeIndex]?.length || 1) *
              (screenWidth > 479 ? 2.5 : 5.6)
            }vw`,
          }}
        >
          {animationTexts.map((text, index) => {
            return (
              <p
                key={text}
                style={{ transform: `translateY(${-100 * activeIndex}%)` }}
              >
                {text}
              </p>
            );
          })}
        </div>
        <p className={styles.bigText}>{rightText}</p>
      </div>
    </div>
  );
}

Overlay.defaultProps = {
  timeout: 5000,
};

export default Overlay;
