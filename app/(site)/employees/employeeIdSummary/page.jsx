import Link from "next/link";
import { getEmployees } from "../../../../lib/helperE";

export default async function EmployeePage() {
  let { employees } = await getEmployees();

  return (
    <>
      <div>
        <h1 className="pl-32">Details</h1>
        <ul className="flex flex-col px-6 text-sm ">
          {employees?.map((employee) => (
            <li key={employee._id}>
              <Link href={`/employees/employeeIdSummary/${employee._id}`}>
                {employee.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
