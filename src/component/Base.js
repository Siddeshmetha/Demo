import CustomNavbar from "./CustomNavbar";

const Base = ({ title = "welcome to our website", childern }) => {
  return (
    <div className="container-fluid">
      <CustomNavbar />

      {childern}
    </div>
  );
};

export default Base;
