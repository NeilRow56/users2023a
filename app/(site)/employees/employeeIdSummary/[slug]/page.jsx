import { getEmployees, getEmployee } from "../../../../../lib/helperE";
// import Details from "./detail";

const DetailsPage = async (props) => {
  const slug = props.params.slug;

  return (
    <div>
      <h1>This is a slug: {slug}</h1>
    </div>
  );
};

export default DetailsPage;
