import express, { Express, NextFunction, Request, Response, } from "express";
import dotenv from "dotenv";
import programmingLanguagesRouter from "./routes/programmingLanguage";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, this is Express + TypesssScript" });
});
app.use("/programming-languages", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err : any, req: Request, res : Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
