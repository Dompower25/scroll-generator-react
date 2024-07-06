import React from "react"
import style from './style.module.scss';

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

const ScrollbarEnteringSize = () => {
  return (
<>
<input
    type="text"
    class="input"
    v-model="valueSize"
    @change="console.log($event.currentTarget?.value)"
  />
</>
  )
}

export default ScrollbarEnteringSize;
