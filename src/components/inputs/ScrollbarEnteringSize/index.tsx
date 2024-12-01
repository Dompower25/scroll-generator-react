import React, { FC, useEffect, useState } from "react"
import styles from './style.module.scss';

// {/* // требуется сделать backup версию значения инпута и если значение не изменилось вернуть прежнее значение.

// // при взаимодействии с инспутом в виде клика на него, значение valueSize изменяется на ''

// //  требуется добавить запрет на ввод значений не допустимых для данного вида инпута
// //  например для установленном запретном типе данных в виде string -> в инпут нельзя вводить значение данного типа
// //  при этом вывожить сообщение об неверном вводе либо каким-то другим образом показать юзеру о неверных действиях */}

// const checkingForNumber = (value: any) => {
//   console.log("переданное значение: ", value);
//   if (typeof value) {
//     return "change you is not number";
//   }
//   return value;
// };



interface IScrollbarEnteringSize {
  defaultSize: number
}

const filtresInputValue: FC<IScrollbarEnteringSize> = ({ defaultSize }) => {
  const [size, setSize] = useState(defaultSize)
  const [backup, setBackup] = useState(defaultSize)

  const filtresInputValue = (enter: string) => {
    const reg = /^\d+$/;

    // if(enter)

  //   if (enter.match(reg)) {
  //     const isNumber = Number(enter.match(reg)?.input)
  //     setBackup(isNumber)
  //   }
  //   return backup
  }

  useEffect(() => {
    setSize(backup)
  }, [backup])

  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={size}
        typeof="number"
        onChange={(e) => {
          setSize(e.target.value)
        }}
      />
    </>
  )
}

export default ScrollbarEnteringSize;
