import {Server} from "../models/server";
import dotenv from "dotenv";

import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient();

dotenv.config();

const server = new Server();



server.listen();