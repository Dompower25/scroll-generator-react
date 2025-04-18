import styles from './style.module.scss';

import ScrollbarColorPicker from '../inputs/ScrollbarColorPicker/index.js';
import ScrollbarEnteringSize from '../inputs/ScrollbarEnteringSize/index.js';
import ScrollbarBorderStylePicker from '../inputs/ScrollbarBorderStylePicker/index.js';
import SButton from '../buttons/SButton/index.js';
import { useEffect, useState } from 'react';

// import useCopyText from "../api/useCopyText.js";


const indent = (size: number) => ' '.repeat(size)


const generateCssStyles = (classNameName: string, properties: {}, indentSize?: number): string => {
  return (
    classNameName +
    " {\n" +
    Object.entries(properties)
      .map((value) => {
        return indent(indentSize ? indentSize : 2) + `${value[0]}: ${value[1]};`
      })
      .join('\n') +
    "\n}"
  )
};




const Wrapper = ({ }) => {
  const [pixel, setPixel] = useState(0)
  const [cssClass, setCssClass] = useState('')
  const foo = () => {
    setPixel(pixel + 1)
  }

  useEffect(() => {
    setCssClass(generateCssStyles('.myScrollBarClass', {
      'body::-webkit-scrollbar width': `${pixel}px`,
      'box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
      'body::-webkit-scrollbar-thumb background-color': 'darkgrey',
      'outline': '1px solid slategrey'
    }))
  }, [pixel])

  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollbar_style_block}>
        <section>
          <div className={styles.scrollbar_box}>
            <div className={styles.scrollbar}>
              <img src="../public/Group11.svg" alt="scrollbar" />
            </div>
            <div className={styles.inputs_scrollbar_styles}>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarEnteringSize defaultSize={'12'} key={'id1'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarColorPicker defaultColorInHexCode='#3e4740' key={'cp1'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarEnteringSize defaultSize={'1'} key={'id2'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarColorPicker defaultColorInHexCode='#d32525' key={'cp2'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarEnteringSize defaultSize={'4'} key={'id3'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarColorPicker defaultColorInHexCode='#000000' key={'cp3'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarBorderStylePicker />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.line}></div>
      <div className={styles.style_block}>
        <div className={styles.buttons_block}>
          <SButton innerText='css' />
          <SButton innerText='sass' />
          <SButton innerText='less' />
          <button onClick={foo}>click me</button>
        </div>
        <div className={styles.code_style_wrapper}>
          <pre>{cssClass}</pre>
        </div>
        <div className={styles.buttons_block}>
          <SButton innerText='copy' />
        </div>
      </div>
    </div>
  )
}

export default Wrapper;
