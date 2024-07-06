import React from "react";
import style from './style.module.scss';


// defineProps({
//   execution: {
//     type: Boolean,
//     default: true,
//   },
//   dynamicStyle: {
//     type: String,
//   },
// });

const CopyInfo = () => {
  return (
    <div class="copyWind" :class="dynamicStyle">
    <div class="shell">
      <img
        v-if="execution"
        class="img"
        src="../../assets/copyWindow/copySuccessfully.svg"
        alt="copy"
      />

      <img
        v-else
        class="img"
        src="../../assets/copyWindow/copyUnsuccessfully.svg"
        alt="copy"
      />

      <div v-if="execution" class="textInformation">copy is successfully</div>
      <div v-else class="textInformation">copy error</div>
    </div>
  </div>
  )
}

export default CopyInfo;