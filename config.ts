import { config as _config } from "dotenv";

_config();

const config = {
    db: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBDATABASE,
    },
    listPerPage: 10,
};
export default config;
