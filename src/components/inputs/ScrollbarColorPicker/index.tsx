import React from "react"
import style from './style.module.scss'

//  при нажатии на colorPicker отображается окно с выбором цвета. Выбраный цвет отображается в формате HEX-кода

const ScrollbarColorPicker = () => {
  return (
    <>
      <div className={style.wrapperColorPicker}>
        <div className={style.colorPicker} />
        #HEX-code
      </div>
    </>
  )
}

export default ScrollbarColorPicker;

