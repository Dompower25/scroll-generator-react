import React, { FC, useEffect, useState } from "react"
import styles from './style.module.scss';

// const props = defineProps({
//   defaultSize: {
//     type: Number,
//     required: true,
//     default: ' px'
//   },
// });

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

// const valueSize = ref(checkingForNumber(props.defaultSize));
// console.log(valueSize.value)

interface IScrollbarEnteringSize {
  defaultSize: number
}

const ScrollbarEnteringSize: FC<IScrollbarEnteringSize> = ({ defaultSize }) => {
  const [size, setSize] = useState(defaultSize)
  const [backup, setBackup] = useState(defaultSize)


  const changeInInput = (enter: string) => {
    const reg = /^\d+$/;

    if (enter.match(reg)) {
      let num = Number(enter.match(reg)?.input)
      setBackup(num)
    }
    return backup
  }

  useEffect(() => {
    setSize(backup)
    console.log(size)
  }, [backup])

  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={size}
        onChange={(e) => {
          changeInInput(e.target.value)
          console.log(changeInInput(e.target.value))
        }}
      />
    </>
  )
}

export default ScrollbarEnteringSize;
