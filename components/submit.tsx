import React from "react";
import styles from './submit.module.css';

export interface SubmitProps extends React.HTMLProps<HTMLInputElement> {
 children: string
}

export default function Submit(props: SubmitProps) {
 const { children, ...rest } = props;

 return <input type="submit" value={children} className={styles.submit} {...rest} />
}