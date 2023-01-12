import dbConnect from "../../../lib/dbConnect";
import nc from "next-connect";
import { getUsers, newUser } from "../../../controllers/userControllers";

const handler = nc();

dbConnect();

handler.get(getUsers);
handler.post(newUser);

export default handler;
