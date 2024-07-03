<script setup lang="ts">
import { ref } from "vue";
import CopyInfo from "../copy/CopyInfo.vue";

defineProps({
  innerText: {
    type: String,
    default: "inner-Text",
    required: true,
  },
  colorText: {
    type: String,
    default: "black",
    required: false,
  },
  backgroundColor: {
    type: String,
    default: "none",
    required: false,
  },
  foo: {
    type: Function,
  },
});

const showState = ref(false);
const dynamicClass = ref("");


function showCopyInfo() {
  dynamicClass.value = "mounted";
  showState.value = true;

  setTimeout(() => {
    dynamicClass.value = "unmounted";
    setTimeout(() => {
      showState.value = false;
    }, 200);
  }, 2000);
}
</script>

<template>
  <button
    v-on:click="showCopyInfo"
    class="wrapperButton"
    :style="{ color: colorText, background: backgroundColor }"
  >
    {{ innerText }}
  </button>

  <CopyInfo v-if="showState" :dynamic-style="dynamicClass" />
</template>

<style lang="scss">
.wrapperButton {
  position: relative;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;

  text-transform: uppercase;

  padding: 6px 7px;
  margin: 0 10px;

  border: none;

  border-radius: 3px;
  color: black;

  &:first-child {
    margin-left: 0px !important;
  }

  &:last-child {
    margin-right: 0px !important;
  }

  &:active {
    text-shadow: 1px 1px #00000077;
  }

  &:focus {
    &::before {
      content: "";
      position: absolute;

      width: 80%;
      height: 3px;
      border-radius: 2px;
      background-color: white;

      bottom: 0px;
    }
  }

  cursor: pointer;
}
</style>
