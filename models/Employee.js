import { Schema, models, model } from "mongoose";

const employeeSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});

const Employee = models.employee || model("employee", employeeSchema);

export default Employee;
