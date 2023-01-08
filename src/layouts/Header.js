import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <img
        src={process.env.PUBLIC_URL + "assets/lightLogo.png"}
        alt="Corona dashboard Header Logo"
      />
    </div>
  );
};

export default Header;