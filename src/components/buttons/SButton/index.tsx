import React from "react";
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

const SButton = ({ }) => {
  return (

    <button className={style.wrapperButton}>
      {/* v-on:click="showCopyInfo"
        
        :style="{ color: colorText, background: backgroundColor }"
        {{ innerText }} */}
    </button>
  )
}

export default SButton;


