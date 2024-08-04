import React, { FC, useState } from "react"
import style from './style.module.scss'

//  при нажатии на colorPicker отображается окно с выбором цвета. Выбраный цвет отображается в формате HEX-кода
interface IScrollbarColorPicker {
  defaultColorInHexCode: string
}

const ScrollbarColorPicker: FC<IScrollbarColorPicker> = ({defaultColorInHexCode}) => {
  const [color, setColor] = useState(defaultColorInHexCode)
  
  return (
    <>
      <div className={style.wrapperColorPicker}>
        <div className={style.showColor} style={{
          backgroundColor: `#${color}`
        }} />
        <input className={style.input} value={`#${color}`} onChange={(e) => {
          setColor(e.target.value)
        }}/>
      </div>
    </>
  )
}

export default ScrollbarColorPicker;

