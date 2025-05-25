import { FC } from "react";
import style from './style.module.scss';

interface IScrollbar {

}

const Scrollbar: FC<IScrollbar> = ({ }) => {

    return (
        <>
        <div className={style.scrollbar}>
            <div className={style.scrollbarBackground}>
                <div className={style.scrollbarThumb}></div>
            </div>
        </div>
        </>
    )

}

export default Scrollbar;
