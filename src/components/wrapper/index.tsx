import React from 'react';
import style from './style.module.scss';

import SButton from "./button/SButton.vue";
import ScrollbarColorPicker from "./inputs/ScrollbarColorPicker.vue";
import ScrollbarEnteringSize from "./inputs/ScrollbarEnteringSize.vue";

import useCopyText from "../api/useCopyText.js";

const indent = (size: number) => {
  return new Array(size).fill(" ").join("");
};

const getCssClass = (className: string, properties: {}, indentSize: number) => {
  return (
    className +
    " {\n " +
    Object.entries(properties).map((value) => {
      return indent(indentSize) + `${value[0]}: ${value[1]};`;
    }) +
    "\n}"
  );
};

const Wrapper: FC = ({}) => {
  
  return (
    <div class="wrapper">
    <div class="scrollbar_style_block">
      <section>
        <div class="scrollbar_box">
          <div class="scrollbar">
            <img src="../assets/Group 11.svg" alt="scrollbar" />
          </div>
          <div class="inputs_scrollbar_styles">
            <div class="input_scrollbar_style">
              <ScrollbarEnteringSize :default-size="5" />
            </div>
            <div class="input_scrollbar_style"><ScrollbarColorPicker /></div>
            <div class="input_scrollbar_style">
              <ScrollbarEnteringSize :default-size="2" />
            </div>
            <div class="input_scrollbar_style"><ScrollbarColorPicker /></div>
            <div class="input_scrollbar_style">
              <ScrollbarEnteringSize :default-size="0.2" />
            </div>
            <div class="input_scrollbar_style"><ScrollbarColorPicker /></div>
            <div class="input_scrollbar_style">border style picker</div>
          </div>
        </div>
      </section>
    </div>
    <div class="line"></div>
    <div class="style_block">
      <div class="buttons_block">
        <SButton :inner-text="'CSS'" :color-text="'white'" />
        <SButton :inner-text="'SASS'" :color-text="'white'" />
        <SButton :inner-text="'LESS'" :color-text="'white'" />
      </div>
      <div class="code_style_wrapper">
        body::-webkit-scrollbar { width: 1em; } body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); }
        body::-webkit-scrollbar-thumb { background-color: darkgrey; outline:
        1px; solid slategrey; }
      </div>
      <div class="buttons_block">
        <SButton
          :foo="useCopyText"
          :inner-text="'copy'"
          background-color="rgb(224, 219, 219)"
        />
      </div>
    </div>
  </div>
  )}

  export default Wrapper;
