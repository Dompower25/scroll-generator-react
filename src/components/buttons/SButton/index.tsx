import { FC } from "react";
import style from './style.module.scss';

type asyncFuncAction<T> = (text: string) => Promise<T>

interface IButtonOptions {
  innerText: string,
  colorText?: string,
  backgroundColor?: string,
  clickAction: asyncFuncAction<any>,
  actionArgs: string
}

const SButton: FC<IButtonOptions> = ({ innerText, colorText, backgroundColor, clickAction, actionArgs }) => {

  const handleClick = async () => {
    await clickAction(actionArgs);
  };

  return (
    <button className={style.wrapperButton}
      style={{
        color: colorText ? colorText : 'white',
        backgroundColor: backgroundColor ? backgroundColor : 'inherit'
      }}
      onClick={handleClick}
    >
      {innerText ? innerText : 'text'}
    </button>
  )
}

export default SButton;


