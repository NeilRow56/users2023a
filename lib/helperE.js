const BASE_URL = "http://localhost:3000";

//All employees
export const getEmployees = async () => {
  let res = await fetch(`${BASE_URL}/api/employees`);
  return res.json();
};

//Single user
export const getEmployee = async (slug) => {
  let res = await fetch(`${BASE_URL}/api/employees/${slug}`);
  if (res) return res.json();
  return {};
};

//Posting a new employee
export async function addEmployee(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    let res = await fetch(`${BASE_URL}/api/employees`, Options);
    return res.json();
  } catch (error) {
    return error;
  }
}

//Update a new employee
export async function updateEmployee(employeeId, formData) {
  try {
    const Options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    let res = await fetch(`${BASE_URL}/api/employees/${employeeId}`, Options);
    return res.json();
  } catch (error) {
    return error;
  }
}

//Delete an employee
export async function deleteEmployee(employeeId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  let res = await fetch(`${BASE_URL}/api/employees/${employeeId}`, Options);
  return res.json();
}
