import Item from "./Item";
import className from "utils/className";
import styles from "./HomeItems.module.scss";

function HomeItems({ data, visible }) {
  return (
    <ul className={className(styles.container, visible && styles.visible)}>
      {data.map((item) => {
        const { title, description, videoSource } = item;
        return (
          <Item
            key={title}
            title={title}
            description={description}
            videoSource={videoSource}
          />
        );
      })}
    </ul>
  );
}

export default HomeItems;
