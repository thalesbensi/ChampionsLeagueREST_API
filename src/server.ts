import express, {Request, Response, json} from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.listen(port, () => {
    console.log(` ✅  Server up and running on port: http://localhost:${port}`)
});

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({player: "beckham"})
});
