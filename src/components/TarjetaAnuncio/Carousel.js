import React, {useState, useEffect} from "react";

import styles from "./tarjetanuncio.module.css";

function Carousel(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.fotos[selectedIndex].url);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      selectedNewImage(selectedIndex, props.fotos);
    }, 5000);
    return () => clearInterval(interval);
  });

  const selectedNewImage = (index, images, next = true) => {
    setLoaded(false);

    const condition = next ? index < images.length - 1 : index > 0;
    const nextIndex = next ? (condition ? index + 1 : 0) : condition ? index - 1 : props.fotos.length - 1;
    setSelectedImage(props.fotos[nextIndex].url);
    setSelectedIndex(nextIndex);
  };

  const previus = () => {
    selectedNewImage(selectedIndex, props.fotos, false);
  };

  const next = () => {
    selectedNewImage(selectedIndex, props.fotos);
  };
  return (
    <>
      <div className={styles.itemcarousel}>
        <button className={styles.button} onClick={previus}>
          &lt;
        </button>
        <img
          className={!loaded ? styles.img : styles.img2}
          src={selectedImage}
          alt="Imagen anuncio"
          onLoad={() => setLoaded(true)}
        ></img>
        <button className={styles.button} onClick={next}>
          &gt;
        </button>
      </div>
    </>
  );
}
export {Carousel};
