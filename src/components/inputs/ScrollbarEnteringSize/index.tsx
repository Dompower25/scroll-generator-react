import { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import useUpdateState from "../../../hooks/useUpdateState";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface IScrollbarEnteringSize {
  defaultSize: string | null;
  state?: number;
  setState: SetState<string>;
}

const inputValueFiltres = (change: string): string | null => {
  const enter = change?.match(/[0-9]/gi)?.join("");
  return enter 
            ? `${enter.replace(/px/gi, '')} px` 
            : null
}


const ScrollbarEnteringSize: FC<IScrollbarEnteringSize> = ({ defaultSize, setState}) => {
  const [size, setSize] = useState(defaultSize);

  useEffect(()=> {setSize(inputValueFiltres(defaultSize || '0'))},[])

  const updateState = useUpdateState(setState)

  const changeSize = (e: any) => {
    updateState(e)
  }

  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={size || '0 px'}
        typeof="string"
        onChange={(e)=> {setSize(inputValueFiltres(e.target.value))
          changeSize(inputValueFiltres(e.target.value))
        }}
      />
    </>
  );
};

export default ScrollbarEnteringSize;
