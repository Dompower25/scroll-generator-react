import { FC } from "react";
import style from './style.module.scss';

interface IScrollbar {

}

const Scrollbar: FC<IScrollbar> = ({ }) => {

    return (
        <>
            <div className={style.scrollbar}>
                <div className={style.arrowBlock}>
                    <div className={`${style.arrowRigth} ${style.arrowRigthPosition}`} />
                    <div className={`${style.arrowLeft} ${style.arrowLeftPosition}`} />
                </div>
                <div className={`${style.circle} ${style.boxShadowPosition}`} />
                <div className={style.arrowThumbBlock}>
                    <div className={`${style.arrowRigth} ${style.arrowRigthPositionInThumb}`} />
                    <div className={`${style.arrowLeft} ${style.arrowLeftPositionInThumb}`} />
                </div>
                <div className={style.scrollbarBlock}>
                    <div className={style.scrollbarThumb}>
                        <div className={`${style.circle} ${style.scrollbarPosition}`} />
                        <div className={`${style.circle} ${style.circleColorBorderPosition}`} />
                    </div>

                    <div className={style.backGroundScrollbarThumbTop}></div>
                    <div className={style.backGroundScrollbarThumbMidle}></div>
                    <div className={style.backGroundScrollbarThumbBottom}></div>
                </div>
            </div>
        </>
    )

}

export default Scrollbar;
