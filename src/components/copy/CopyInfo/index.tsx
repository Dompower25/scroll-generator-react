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
    <div className="copyWind" :className="dynamicStyle">
    <div className="shell">
      <img
        v-if="execution"
        className="img"
        src="../../assets/copyWindow/copySuccessfully.svg"
        alt="copy"
      />

      <img
        v-else
        className="img"
        src="../../assets/copyWindow/copyUnsuccessfully.svg"
        alt="copy"
      />

      <div v-if="execution" className="textInformation">copy is successfully</div>
      <div v-else className="textInformation">copy error</div>
    </div>
  </div>
  )
}

export default CopyInfo;