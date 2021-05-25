import { CardHeader, Card, CardContent } from "@material-ui/core";
import { Palet, PaletItem as OwnPaletItem } from "@/components";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";

export default function Main(props) {
	return (
		<Card>
			<CardHeader title="Привет" />

			<CardContent>
				<Palet>
					<PaletItem to="/user/create">Добавить пользователя</PaletItem>
					<PaletItem to="/users">Менеджер пользователей</PaletItem>
					<PaletItem to="">Менеджер ключей</PaletItem>
					<PaletItem to="">Управление шаблонами</PaletItem>
				</Palet>
			</CardContent>
		</Card>
	);
}

function PaletItem(props) {
	const { to, ...datum } = props;

	const history = useHistory();

	const push = useCallback(() => {
		history.push(to);
	}, [history, to]);

	return <OwnPaletItem onClick={push} {...datum} />;
}
