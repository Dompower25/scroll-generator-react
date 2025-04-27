import { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface IScrollbarEnteringSize {
  defaultSize: string;
  state: string;
  setState: SetState<string>;
}


//converting value
const inputValueFiltres = (change: string): string => {
  const enter = change?.match(/[0-9]/gi)?.join("");
  return enter 
            ? `${enter.replace(/px/gi, '')}px` 
            : 'px'
}

const ScrollbarEnteringSize: FC<IScrollbarEnteringSize> = ({ defaultSize, setState, state}) => {

  //initial value
  useEffect(()=> {setState(inputValueFiltres(defaultSize))},[])

  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={state || '0'}
        typeof="string"
        onChange={(e)=> {
          setState(inputValueFiltres(e.target.value))
        }}
      />
    </>
  );
};

export default ScrollbarEnteringSize;
