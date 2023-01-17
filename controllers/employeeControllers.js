import Employee from "../models/Employee";

const getEmployees = async (req, res) => {
  const employeesCount = await Employee.countDocuments();

  try {
    const employees = await Employee.find({}).lean();

    // If no employees
    if (!employees?.length) {
      return res.status(400).json({ message: "No employees found" });
    }

    res.status(200).json({
      success: true,
      employeesCount,
      employees,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getEmployees };

// // Create new Employee = http://localhost:3000/api/employees
const newEmployee = async (req, res) => {
  try {
    const { name, avatar, email, salary, date, status } = req.body;

    // Confirm data
    if (!name || !avatar || !email || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicate email
    const duplicate = await Employee.findOne({ email }).lean().exec();

    if (duplicate) {
      return res.status(409).json({ message: "Email address already in use" });
    }

    const userObject = { name, avatar, email, salary, date, status };

    // Create and store new user
    const employee = await Employee.create(userObject);

    if (employee) {
      //created
      res.status(201).json({ message: `New employee ${name} created` });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid employee data received",
    });
  }
};

export { newEmployee };

// put : http://localhost:3000/api/employees/1

export async function patchEmployee(req, res) {
  try {
    const { employeeId } = req.query;
    const formData = req.body;

    if (employeeId && formData) {
      const employee = await Employee.findByIdAndUpdate(employeeId, formData);
      res.status(200).json(employee);
    }
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// get : http://localhost:3000/api/employees/1
export async function getEmployee(req, res) {
  try {
    const { employeeId } = req.query;

    if (employeeId) {
      const employee = await Employee.findById(employeeId);
      res.status(200).json(employee);
    }
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Employee...!" });
  }
}

// delete : http://localhost:3000/api/delete/1
export async function deleteEmployee(req, res) {
  try {
    const { employeeId } = req.query;

    if (employeeId) {
      const employee = await Employee.findByIdAndDelete(employeeId);

      const { name } = employee;
      return res.status(200).json({ message: `Employee ${name} deleted` });
    }
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Employee...!" });
  }
}
