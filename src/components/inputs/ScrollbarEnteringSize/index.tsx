import React, { FC, ReactHTMLElement, useEffect, useState } from "react";
import styles from "./style.module.scss";

// {/* // требуется сделать backup версию значения инпута и если значение не изменилось вернуть прежнее значение.

// // при взаимодействии с инспутом в виде клика на него, значение valueSize изменяется на ''

// //  требуется добавить запрет на ввод значений не допустимых для данного вида инпута
// //  например для установленном запретном типе данных в виде string -> в инпут нельзя вводить значение данного типа
// //  при этом вывожить сообщение об неверном вводе либо каким-то другим образом показать юзеру о неверных действиях */}


interface IScrollbarEnteringSize {
  defaultSize: string;
}

const ScrollbarEnteringSize: FC<IScrollbarEnteringSize> = ({ defaultSize }) => {
  const [size, setSize] = useState(defaultSize);

  const inputValueFiltres = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enter = event.target.value.match(/[0-9]/gi)?.join("");
    setSize(enter ? enter : "");
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
