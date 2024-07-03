<script setup lang="ts"></script>

<template>
  <div class="wrapperColorPicker">
    <div class="colorPicker" />
    #HEX-code
  </div>
</template>

<!-- при нажатии на colorPicker отображается окно с выбором цвета. Выбраный цвет отображается в формате HEX-кода -->

<style lang="scss">

.wrapperColorPicker {
        display: flex;
}
.colorPicker {
        margin-right: 4px;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(255, 255, 255, 0.78);
  border-radius: 4px;
  background-color: brown; //передавать стиль пропсом в див colorPicker
  cursor: pointer;
}
</style>
