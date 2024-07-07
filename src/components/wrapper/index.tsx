import React from 'react';
import styles from './style.module.scss';

import ScrollbarColorPicker from '../inputs/ScrollbarColorPicker/index.js';
import ScrollbarEnteringSize from '../inputs/ScrollbarEnteringSize/index.js';
import SButton from '../buttons/SButton/index.js';

import useCopyText from "../api/useCopyText.js";



const indent = (size: number) => {
  return new Array(size).fill(" ").join("");
};

const getCssclassName = (classNameName: string, properties: {}, indentSize: number) => {
  return (
    classNameName +
    " {\n " +
    Object.entries(properties).map((value) => {
      return indent(indentSize) + `${value[0]}: ${value[1]};`;
    }) +
    "\n}"
  );
};

const Wrapper = ({ }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollbar_style_block}>
        <section>
          <div className={styles.scrollbar_box}>
            <div className={styles.scrollbar}>
              <img src="../public/Group11.svg" alt="scrollbar" />
            </div>
            <div className={styles.inputs_scrollbar_styles}>
              <div className={styles.input_scrollbar_style}>
                {/* <ScrollbarEnteringSize /> */}
              </div>
              <div className={styles.input_scrollbar_style}>
                {/* <ScrollbarColorPicker /> */}
              </div>
              <div className={styles.input_scrollbar_style}>
                {/* <ScrollbarEnteringSize /> */}
              </div>
              <div className={styles.input_scrollbar_style}>
                {/* <ScrollbarColorPicker /> */}
              </div>
              <div className={styles.input_scrollbar_style}>
                {/* <ScrollbarEnteringSize /> */}
              </div>
              <div className={styles.input_scrollbar_style}>
                {/* <ScrollbarColorPicker /> */}
              </div>
              <div className={styles.input_scrollbar_style}>border style picker</div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.line}></div>
      <div className={styles.style_block}>
        <div className={styles.buttons_block}>
          {/* <SButton />
          <SButton />
          <SButton /> */}
        </div>
        <div className={styles.code_style_wrapper}>
          body::-webkit-scrollbar width: 1em;
          body::-webkit-scrollbar-track
          box - shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          body::-webkit-scrollbar-thumb background - color: darkgrey; outline:
          1px; solid slategrey;
        </div>
        <div className={styles.buttons_block}>
          {/* <SButton /> */}
        </div>
      </div>
    </div>
  )
}

export default Wrapper;