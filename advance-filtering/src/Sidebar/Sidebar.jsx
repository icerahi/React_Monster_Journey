import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange, categories }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange} categories={categories} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};
export default Sidebar;
