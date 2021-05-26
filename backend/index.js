import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`[CONSTCODE] JSON Server Manager server started at http://localhost:${port}`);
});
