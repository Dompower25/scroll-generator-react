import React from 'react';
import styles from "./style.module.scss";


const ScrollbarBorderStylePicker = () => {
    return (
        <>
            <select name="border_style" className={styles.borderPicker}>
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
                <option value="double">Double</option>
                <option value="inherit">Inherit</option>
                <option value="groove">Groove</option>
                <option value="hidden">Hidden</option>
                <option value="initial">Initial</option>
                <option value="inset">Inset</option>
                <option value="ridge">Ridge</option>
                <option value="unset">Unset</option>
                <option value="outset">Outset</option>
            </select>
        </>
    )
}

export default ScrollbarBorderStylePicker;