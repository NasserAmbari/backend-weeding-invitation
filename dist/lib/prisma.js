/// <reference types="node" />
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
});
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
export default prisma;
