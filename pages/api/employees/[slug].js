import dbConnect from "../../../lib/dbConnect";
import {
  getEmployee,
  patchEmployee,
  deleteEmployee,
} from "../../../controllers/employeeControllers";
import nc from "next-connect";

const handler = nc();

dbConnect();

handler.get(getEmployee);
handler.patch(patchEmployee);
handler.delete(deleteEmployee);

export default handler;
