import { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";


interface IScrollbarEnteringSize {
  defaultSize: string | null;
  state?: number
}
const inputValueFiltres = (change: string): string | null => {
  const enter = change?.match(/[0-9]/gi)?.join("");
  return enter 
            ? `${enter.replace(/px/gi, '')} px` 
            : null
}

const ScrollbarEnteringSize: FC<IScrollbarEnteringSize> = ({ defaultSize}) => {
  const [size, setSize] = useState(defaultSize);

  useEffect(()=> {setSize(inputValueFiltres(defaultSize || '0'))},[])

  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={size || '0 px'}
        typeof="string"
        onChange={(e)=> {setSize(inputValueFiltres(e.target.value))
 
        }}
      />
    </>
  );
};

export default ScrollbarEnteringSize;
