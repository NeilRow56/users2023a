import React from "react";
import FormComponent from "../../components/employeeComponents/FormComponent";
import Employees from "../../components/employeeComponents/Employees";

export default function FirstPage() {
  return (
    <>
      <div>
        <FormComponent />
      </div>
      <div>
        <Employees />
      </div>
    </>
  );
}
