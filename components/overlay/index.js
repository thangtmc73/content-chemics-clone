import { useState, useEffect, useRef } from "react";
import className from "utils/className";
import styles from "./Overlay.module.scss";

function Overlay({ visible, show, hide, leftText, rightText, animationTexts }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const timeoutRef = useRef(null);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
      show && show();
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [show]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (activeIndex === animationTexts.length - 1) {
        hide && hide();
        return;
      }
      setActiveIndex((index) => index + 1);
    }, 550);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, animationTexts, hide]);

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
