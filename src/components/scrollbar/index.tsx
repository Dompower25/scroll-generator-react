import { FC } from "react";
import style from './style.module.scss';

interface IScrollbar {

}

const Scrollbar: FC<IScrollbar> = ({ }) => {

    return (
        <>
            <div className={style.scrollbar}>
                <div className={style.arrowBlock}>
                    <div className={style.arrowRigth} />
                    <div className={style.arrowLeft} />
                </div>
                <div className={`${style.circle} ${style.boxShadowPosition}`} />

                <div className={style.scrollbarBlock}>
                    <div className={style.scrollbarThumb}>

                    </div>
                    <div className={style.backGroundScrollbarThumbTop}></div>
                </div>
            </div>
        </>
    )

}

export default Scrollbar;
