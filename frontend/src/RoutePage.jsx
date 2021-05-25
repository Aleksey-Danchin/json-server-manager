import { Switch, Route } from "react-router-dom";

import {
	MainPage,
	UserCreatePage,
	UserEditPage,
	UserManagerPage,
} from "./pages";

export default function RoutePage(props) {
	return (
		<Switch>
			<Route path="/user/create" exact>
				<UserCreatePage />
			</Route>

			<Route path="/user/:userId" exact>
				<UserEditPage />
			</Route>

			<Route path="/users" exact>
				<UserManagerPage />
			</Route>

			<Route path="/">
				<MainPage />
			</Route>
		</Switch>
	);
}
