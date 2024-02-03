import logoImage from "./image/logoImage.png";

const AppHeading = () => {
  return (
    <div className="headingContainer">
      <img className="logo" src={logoImage} />
      <h1 className="Appheading">Investment App</h1>
    </div>
  );
};

export default AppHeading;
