import { createConnection } from "mysql2/promise";
import config from "../config";

const { db } = config;

async function query(sql: string, params?: any) {
    const connection = await createConnection(db);
    const [results] = await connection.execute(sql, params);

    return results;
}

export default {
    query,
};
