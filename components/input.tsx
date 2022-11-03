import React, { LegacyRef } from "react";
import styles from './input.module.css';

const Input = React.forwardRef((props: React.HTMLProps<HTMLInputElement>, ref: LegacyRef<HTMLInputElement>) => {
 return <input ref={ref} autoComplete="off" className={styles.textField} {...props} />
});

export default Input;