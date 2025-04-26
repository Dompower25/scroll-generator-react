import React, { FC } from "react";
import style from './style.module.scss';

// defineProps({
//   innerText: {
//     type: String,
//     default: "inner-Text",
//     required: true,
//   },
//   colorText: {
//     type: String,
//     default: "black",
//     required: false,
//   },
//   backgroundColor: {
//     type: String,
//     default: "none",
//     required: false,
//   },
//   foo: {
//     type: Function,
//   },
// });

// const showState = ref(false);
// const dynamicClass = ref(""); 


// function showCopyInfo() {
//   dynamicClass.value = "mounted";
//   showState.value = true;

//   setTimeout(() => {
//     dynamicClass.value = "unmounted";
//     setTimeout(() => {
//       showState.value = false;
//     }, 200);
//   }, 2000);
// }

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


