import styles from "./style.module.css";

export default function Palet(props) {
	const { children, style = {} } = props;

	return (
		<div className={styles.palet} style={style}>
			{children}
		</div>
	);
}
