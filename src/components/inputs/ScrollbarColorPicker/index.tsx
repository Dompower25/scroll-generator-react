import React, { FC, useCallback, useEffect, useState } from "react"
import style from './style.module.scss'
import {BlockPicker as ReactColorPicker} from 'react-color'

//  при нажатии на colorPicker отображается окно с выбором цвета. Выбраный цвет отображается в формате HEX-кода
//  по нажатию на div className={style.showColor} - появляется colorPicker в котором можно выбрать цвет и он добавится
//  в input className={style.input} параметр value


interface IScrollbarColorPicker {
  defaultColorInHexCode: string
}

const ScrollbarColorPicker: FC<IScrollbarColorPicker> = ({ defaultColorInHexCode }) => {
  const [color, setColor] = useState(defaultColorInHexCode ? defaultColorInHexCode : `#fff`)

  const convertingToHex = (color: string): string => {
      return `#${color.length == 0 ? 'fff' : color.replace(/#/gi, '')}`
    }
  
  const openReactColorPicker = () => {

    return <ReactColorPicker width="100px" />
  }

  return (
    <>
      <div className={style.wrapperColorPicker}>
        
        <div className={style.showColor} onClick={openReactColorPicker} style={{
          backgroundColor: `${color}`
        }} />
        <input className={style.input} value={color} onChange={(e) => {
          setColor(convertingToHex(e.target.value))
        }} />
      </div>
    </>
  )
}

export default ScrollbarColorPicker;


