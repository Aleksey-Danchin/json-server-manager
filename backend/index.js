import app from "./app.js";

const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

console.log(process.env.NODE_ENV);
