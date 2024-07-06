import React from "react"
import style from './style.module.scss'

const ScrollbarColorPicker = () => {
  return (
    <>
    <div class="wrapperColorPicker">
    <div class="colorPicker" />
    #HEX-code
  </div>
    </>
  )
}

export default ScrollbarColorPicker;

//  при нажатии на colorPicker отображается окно с выбором цвета. Выбраный цвет отображается в формате HEX-кода
