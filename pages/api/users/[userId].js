import dbConnect from "../../../lib/dbConnect";
import { getUser } from "../../../controllers/userControllers";
import nc from "next-connect";

const handler = nc();

dbConnect();

handler.get(getUser);

export default handler;
