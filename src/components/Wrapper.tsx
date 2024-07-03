<script setup lang="ts">
import SButton from "./button/SButton.vue";
import ScrollbarColorPicker from "./inputs/ScrollbarColorPicker.vue";
import ScrollbarEnteringSize from "./inputs/ScrollbarEnteringSize.vue";

import useCopyText from "../api/useCopyText.js";

// const indent = (size: number) => {
//   return new Array(size).fill(" ").join("");
// };

// const getCssClass = (className: string, properties: {}, indentSize: number) => {
//   return (
//     className +
//     " {\n " +
//     Object.entries(properties).map((value) => {
//       return indent(indentSize) + `${value[0]}: ${value[1]};`;
//     }) +
//     "\n}"
//   );
// };

</script>

<template>
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
</template>

<style lang="scss">
@import "../styles/index.scss";

.wrapper {
  width: 70%;
  height: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;

  .line {
    width: 1px;
    height: 100%;
    border: none;
    background: #ffffff33;
    margin: auto 62px;
  }

  .scrollbar_style_block {
    width: 100%;
    height: 100%;

    section {
      height: 100%;
      display: flex;

      align-items: center;
    }

    .scrollbar_box {
      position: absolute;
      display: flex;
      justify-content: space-around;
      align-items: center;

      padding: 15px 0px;

      .scrollbar {
        position: relative;
        width: 30px;
        height: 322px;
        background: rgba(255, 255, 255, 0.1);

        img {
          position: relative;
          transform: translate(-23px, 20px);
        }
      }

      .inputs_scrollbar_styles {
        position: relative;
        transform: translate(20px, -32px);

        display: flex;
        flex-direction: column;

        .input_scrollbar_style {
          position: relative;
          top: 5px;
          padding: 9px 4px;

          font-family: "Inter", sans-serif;
          font-optical-sizing: auto;
          font-weight: 300;

          color: rgba(255, 255, 255, 0.78);
          font-weight: 400;
          font-size: 14px;

          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          width: 200px; // возможно потребуется удалить, при использовании интутов.
        }
      }
    }

    // border: 1px solid white;
  }

  .style_block {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .buttons_block {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .code_style_wrapper {
      padding: 15px;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      margin: 20px 0;

      font-family: "JetBrains Mono", monospace;
      font-weight: 400;
    }
  }
}
</style>
