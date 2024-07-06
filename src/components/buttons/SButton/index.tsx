import React from "react";
import style from './style.module.scss';
import CopyInfo from "../copy/CopyInfo.vue";

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

const SButton = ({

}) => {
  return (
    
    <button>
        v-on:click="showCopyInfo"
        class="wrapperButton"
        :style="{ color: colorText, background: backgroundColor }"
        {{ innerText }}
  </button>

  {/* <CopyInfo v-if="showState" :dynamic-style="dynamicClass" /> */}
    
  )
}

export default SButton;