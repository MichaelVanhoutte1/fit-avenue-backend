import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";

export function getOffset(currentPage: number = 1, listPerPage: number) {
    return (currentPage - 1) * listPerPage;
}

export function emptyOrRows(rows: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader) {
    if (!rows) {
        return [];
    }
    return rows;
}

export default {
    getOffset,
    emptyOrRows,
};
