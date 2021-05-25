import { AppBar, Toolbar, Typography } from "@material-ui/core";

import RoutePage from "./RoutePage";

import { useHistory } from "react-router-dom";

export default function App(props) {
	const history = useHistory();

	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
						style={{ cursor: "pointer" }}
						onClick={() => history.push("/")}
					>
						JSM
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<RoutePage />
		</>
	);
}
