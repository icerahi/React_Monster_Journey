import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="side-bar-filter">
      <h2 className="title">Price</h2>
      <div className="input-container">
        <Input handleChange={handleChange} name="price" label="All" value="" />
        <Input
          handleChange={handleChange}
          name="price"
          label="$0-50"
          value={50}
        />
        <Input
          handleChange={handleChange}
          name="price"
          label="$50-100"
          value={100}
        />
        <Input
          handleChange={handleChange}
          name="price"
          label="$100-150"
          value={150}
        />
        <Input
          handleChange={handleChange}
          name="price"
          label="over $150"
          value={200}
        />
      </div>
    </div>
  );
};
export default Price;
