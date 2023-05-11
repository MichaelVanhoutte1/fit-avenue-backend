import { NextFunction, Request, Response, Router } from "express";
import ProgrammingLanguageService  from "../services/programmingLanguage";

const { getMultiple } = ProgrammingLanguageService;

const router: Router = Router();
/* GET programming languages. */
router.get("/", async function (req : Request, res: Response, next: NextFunction) {
    try {
        res.json(await getMultiple(req.query.page));
    } catch (err: any) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

export default router;
