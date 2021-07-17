import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      {/*inline CSS*/}
      {/*<h1 style={{ color: "red", backgroundColor: "black" }}>{title}</h1>*/}

      <h1>{title}</h1>
      <Button color="green" text="add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
