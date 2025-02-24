import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo_container">
        <img src={logo} alt="" />
      </div>
      <h1 className="header_title">Chef Claude</h1>
    </header>
  );
}
