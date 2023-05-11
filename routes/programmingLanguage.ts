import { NextFunction, Request, Response, Router } from "express";
import ProgrammingLanguageService from "../services/programmingLanguage";

const { getMultiple, create, update, remove } = ProgrammingLanguageService;

const router: Router = Router();
/* GET programming languages. */
router.get("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await getMultiple(req.query.page));
    } catch (err: any) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});
router.post("/", async function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await create(req.body));
    } catch (err: any) {
        console.error(`Error while creating programming language`, err.message);
        next(err);
    }
});
router.put("/:id", async function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await update(req.params.id, req.body));
    } catch (err: any) {
        console.error(`Error while updating programming language`, err.message);
        next(err);
    }
});
router.delete("/:id", async function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json(await remove(req.params.id));
    } catch (err: any) {
        console.error(`Error while deleting programming language`, err.message);
        next(err);
    }
});

export default router;
