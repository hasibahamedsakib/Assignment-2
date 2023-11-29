import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

const env = process.env;
export default {
  port: env.PORT || 4001,
  db_url: env.DB_URL || "mongodb://localhost:27017/AssignmentTwo",
  salt_rounds: env.SALT_ROUNDS,
};
