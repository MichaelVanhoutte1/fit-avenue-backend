import db from "./db";
import { getOffset, emptyOrRows } from "../helper";
import config from "../config";

const { listPerPage } = config;
const { query } = db;

async function getMultiple(page: any = 1) {
    const offset = getOffset(page, listPerPage);
    const rows = await query(
        `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${listPerPage}`
    );
    const data = emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta,
    };
}

export default {
    getMultiple,
};
