import dbConnect from "../../../lib/dbConnect";
import nc from "next-connect";
import {
  getEmployees,
  newEmployee,
} from "../../../controllers/employeeControllers";

const handler = nc();

dbConnect();

handler.get(getEmployees);
handler.post(newEmployee);

export default handler;
