import createApplication from "./application";

const app = createApplication();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(` ✅  Server up and running on port: http://localhost:${port}`)
});
