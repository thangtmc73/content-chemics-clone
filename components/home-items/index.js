import Item from "./Item";
import styles from "./HomeItems.module.scss";

function HomeItems({ data }) {
  return (
    <ul className={styles.container}>
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
