import styles from "./style.module.css";

import PropTypes from "prop-types";
import { useMemo } from "react";

export default function PaletItem(props) {
	const { size, children, style = {}, onClick } = props;

	const ownStyle = useMemo(() => {
		return {
			width: `${size}px`,
			height: `${size}px`,
			...style,
		};
	}, [size, style]);

	return (
		<div className={styles.paletItem} style={ownStyle} onClick={onClick}>
			{children}
		</div>
	);
}

PaletItem.propTypes = {
	size: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
};

PaletItem.defaultProps = {
	size: 150,
	onClick() {},
};
