import React, { FC } from "react";
import style from './style.module.scss';

// по нажатии на кнопку копирования текста требуется передать текст в функцию копирования

// если копирование произошло удачно показать окно копирования текста с положительными отрибутами
// при обратном слуачае с отрицательными отрибутами

type func = {
  f: () => any
}

interface IButtonOptions {
  innerText: string,
  colorText?: string,
  backgroundColor?: string,
  clickFunction?: func,
}


const SButton: FC<IButtonOptions> = ({ innerText, colorText, backgroundColor, clickFunction }) => {
  return (

    <button className={style.wrapperButton}
      style={{
        color: colorText ? colorText : 'black',
        backgroundColor: backgroundColor ? backgroundColor : 'white'
      }}
      onClick={() => clickFunction}
    >
      {innerText ? innerText : 'text'}
    </button>
  )
}

export default SButton;


