import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange, categories }) => {
  return (
    <div className="side-bar-filter">
      <h2 className="title">Category</h2>
      <div className="input-container">
        <Input
          handleChange={handleChange}
          name="category"
          label="All"
          value=""
        />
        {categories.map((category) => (
          <Input
            key={category}
            handleChange={handleChange}
            name="category"
            label={category[0].toUpperCase() + category.slice(1)}
            //making first letter capital
            value={category}
          />
        ))}
      </div>
    </div>
  );
};
export default Category;
