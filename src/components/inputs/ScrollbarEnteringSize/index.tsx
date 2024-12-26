import React, { FC, useState } from "react";
import styles from "./style.module.scss";


interface IScrollbarEnteringSize {
  defaultSize: string;
}

const ScrollbarEnteringSize: FC<IScrollbarEnteringSize> = ({ defaultSize }) => {
  const [size, setSize] = useState(defaultSize);

  const inputValueFiltres = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enter = event.target.value.match(/[0-9]/gi)?.join("");
    setSize(enter ? enter : "enter number")
  };

  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={size}
        typeof="number"
        onChange={inputValueFiltres}
      />
    </>
  );
};

export default ScrollbarEnteringSize;
