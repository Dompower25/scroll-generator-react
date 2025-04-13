import { FC, useState } from "react"
import style from './style.module.scss'
import { ChromePicker } from 'react-color'

//  при нажатии на colorPicker отображается окно с выбором цвета. Выбраный цвет отображается в формате HEX-кода
//  по нажатию на div className={style.showColor} - появляется colorPicker в котором можно выбрать цвет и он добавится
//  в input className={style.input} параметр value


interface IScrollbarColorPicker {
  defaultColorInHexCode: string
}

const ScrollbarColorPicker: FC<IScrollbarColorPicker> = ({ defaultColorInHexCode }) => {
  const [color, setColor] = useState(defaultColorInHexCode ? defaultColorInHexCode : `#fff`)
  const [showColorPicker, setShowColorPicker] = useState(false)

  const convertingToHex = (color: string): string => {
    return `#${color.length == 0 ? 'fff' : color.replace(/#/gi, '')}`
  }

  const openReactColorPicker = () => {
    setShowColorPicker(!showColorPicker)
  }

  return (
    <>
      <div className={style.wrapperColorPicker}>
        <div className={style.showColor} onClick={openReactColorPicker} style={{
          backgroundColor: `${color}`
        }} />
        {showColorPicker ?
          <div style={{
            position: 'absolute',
            zIndex: '2',
            top: '30px',
          }}>
            <div style={{
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px',
            }}
              onClick={openReactColorPicker} />
            <ChromePicker />
            {/* <ChromePicker onChange={(e) => { setColor(convertingToHex(e.hex)) }} /> */}
          </div>
          : null}
        <input className={style.input} value={color} onChange={(e) => {
          setColor(convertingToHex(e.target.value))
        }} />
      </div>
    </>
  )
}

export default ScrollbarColorPicker;


