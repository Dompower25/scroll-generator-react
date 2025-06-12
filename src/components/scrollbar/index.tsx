import { FC } from "react";
import styles from './style.module.scss';

interface IScrollbar {
    scrollbarWidth: string;
    scrollbarShadowColor: string;
    roundSize: string;
    scrollbarColor: string;
    outlineSize: string;
    outlineColor: string;
    outlineStyle: string;

}

const Scrollbar: FC<IScrollbar> = ({ scrollbarWidth, scrollbarShadowColor, roundSize, scrollbarColor, outlineSize, outlineColor, outlineStyle }) => {

    return (
        <>
            <div className={styles.scrollbar} style={{ width: scrollbarWidth, background: scrollbarShadowColor }}>
                <div className={styles.arrowBlock}>
                    <div className={`${styles.arrowRigth} ${styles.arrowRigthPosition}`} />
                    <div className={`${styles.arrowLeft} ${styles.arrowLeftPosition}`} style={{}} />
                </div>
                <div className={`${styles.circle} ${styles.boxShadowPosition}`} />
                <div className={styles.arrowThumbBlock}>
                    <div className={`${styles.arrowRigth} ${styles.arrowRigthPositionInThumb}`} />
                    <div className={`${styles.arrowLeft} ${styles.arrowLeftPositionInThumb}`} />
                </div>
                <div className={styles.scrollbarBlock} >
                    <div className={styles.scrollbarThumb} style={{ background: scrollbarColor, borderRadius: roundSize, }}>
                        <div className={`${styles.circle} ${styles.scrollbarPosition}`} />
                        <div className={`${styles.circle} ${styles.circleColorBorderPosition}`} />
                    </div>

                    <div className={styles.backGroundScrollbarThumbTop} style={{ borderRadius: roundSize, borderColor: outlineColor }}></div>
                    <div className={styles.backGroundScrollbarThumbMidle} style={{ borderColor: outlineColor }}></div>
                    <div className={styles.backGroundScrollbarThumbBottom} style={{
                        borderColor: outlineColor,
                        borderStyle: outlineStyle,
                    }}></div>
                </div>
            </div >
        </>
    )

}

export default Scrollbar;
