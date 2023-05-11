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

async function create(programmingLanguage: any) {
    const result: any = await db.query(
        `INSERT INTO programming_languages 
        (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
        VALUES 
        (${programmingLanguage.name}, ${programmingLanguage.released_year}, ${programmingLanguage.githut_rank}, ${programmingLanguage.pypl_rank}, ${programmingLanguage.tiobe_rank})`
    );

    let message = "Error in creating programming language";

    if (result.affectedRows) {
        message = "Programming language created successfully";
    }

    return { message };
}

async function update(id: string, programmingLanguage: any) {
    const result: any = await db.query(
        `UPDATE programming_languages 
        SET name="${programmingLanguage.name}", released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank}, 
        pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank} 
        WHERE id=${id}`
    );

    let message = "Error in updating programming language";

    if (result.affectedRows) {
        message = "Programming language updated successfully";
    }

    return { message };
}

async function remove(id: string) {
    const result: any = await db.query(`DELETE FROM programming_languages WHERE id=${id}`);

    let message = "Error in deleting programming language";

    if (result.affectedRows) {
        message = "Programming language deleted successfully";
    }

    return { message };
}

export default {
    getMultiple,
    create,
    update,
    remove,
};
