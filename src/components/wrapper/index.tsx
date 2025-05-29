import { useEffect, useState } from 'react';
import styles from './style.module.scss';

import ScrollbarColorPicker from '../inputs/ScrollbarColorPicker/index.js';
import ScrollbarEnteringSize from '../inputs/ScrollbarEnteringSize/index.js';
import ScrollbarBorderStylePicker from '../inputs/ScrollbarBorderStylePicker/index.js';
import SButton from '../buttons/SButton/index.js';
import CopyInfo from '../copy/CopyInfo/index.js';
import Scrollbar from '../scrollbar/index.js';

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
}

const Wrapper = ({ }) => {
  const [showCopyInfo, setShowCopyInfo] = useState(false)
  const [executionCopy, setExecutionCopy] = useState(Boolean)

  const [scrollbarWidth, setScrollbarWidth] = useState('10')
  const [scrollbarShadowColor, setScrollbarShadowColor] = useState('#3e4740')
  const [scrollbarColor, setScrollbarColor] = useState('#462a2a')
  const [roundSize, setRoundSize] = useState('5')
  const [outlineSize, setOutlineSize] = useState('1')
  const [outlineStyle, setOutlineStyle] = useState('none')
  const [outlineColor, setOutlineColor] = useState('#4c4c4c')

  const [cssClass, setCssClass] = useState('')

  useEffect(() => {
    setCssClass(
  `${generateCssStyles(' &:: -webkit - scrollbar', {
        'width': `${scrollbarWidth}`,
      }, 3)}   
  ${generateCssStyles('&::-webkit-scrollbar', {
        'box-shadow': `inset 0 0 6px ${scrollbarShadowColor}`,
      }, 3)}   
  ${generateCssStyles('&::-webkit-scrollbar-thumb', {
        'background-color': `${scrollbarColor}`,
        'border-radius': `${roundSize}`,
        'outline': `${outlineSize} ${outlineStyle} ${outlineColor}`,
      }, 3)}
      `)
  }, [scrollbarWidth, scrollbarShadowColor, outlineSize, outlineStyle, outlineColor, scrollbarColor])


  const copyTextToClipboard: (text: string) => Promise<void> = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setExecutionCopy(true)
    } catch (err) {
      setExecutionCopy(false)
    } finally {
      setShowCopyInfo(true)
      setTimeout(() => { setShowCopyInfo(false) }, 3200)
    }
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollbar_style_block}>
        <section>
          <div className={styles.scrollbar_box}>
            <Scrollbar/>
            <div className={styles.scrollbar}>
              <img src="../public/Group11.svg" alt="scrollbar" />
            </div>
            <div className={styles.inputs_scrollbar_styles}>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarEnteringSize setState={setScrollbarWidth} state={scrollbarWidth} key={'id1'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarColorPicker setState={setScrollbarShadowColor} state={scrollbarShadowColor} key={'cp1'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarEnteringSize setState={setRoundSize} state={roundSize} key={'id2'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarColorPicker setState={setScrollbarColor} state={scrollbarColor} key={'cp2'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarEnteringSize setState={setOutlineSize} state={outlineSize} key={'id3'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarColorPicker setState={setOutlineColor} state={outlineColor} key={'cp3'} />
              </div>
              <div className={styles.input_scrollbar_style}>
                <ScrollbarBorderStylePicker setState={setOutlineStyle} state={outlineStyle} key={'cp4'} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.line}></div>
      <div className={styles.style_block}>
        {/* <div className={styles.buttons_block}>
          <SButton innerText='css' />
          <SButton innerText='sass' />
          <SButton innerText='less' />
        </div> */}
        <div className={styles.code_style_wrapper}>
          <pre>{`body {\n  overflow-y: scroll; \n ${cssClass}\n}`}</pre>
        </div>
        <div className={styles.buttons_block}>
          <SButton innerText='copy' clickAction={copyTextToClipboard} actionArgs={cssClass} />
        </div>
      </div>
      {showCopyInfo ? <CopyInfo execution={executionCopy} showMounted={3000} /> : null}
    </div>
  )
}

export default Wrapper;
