import { FC, useState } from "react"
import style from './style.module.scss'
import { HexColorPicker as ColorPicker } from "react-colorful";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface IScrollbarColorPicker {
  setState: SetState<string>;
  state: string;
}

const ScrollbarColorPicker: FC<IScrollbarColorPicker> = ({ setState: setColor, state: color }) => {
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
            <ColorPicker onChange={(e) => { setColor(convertingToHex(e)) }} onMouseLeave={openReactColorPicker} />
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


