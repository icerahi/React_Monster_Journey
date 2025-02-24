import Input from "../../components/Input";
import "./Colors.css";
const Colors = ({ handleChange }) => {
  return (
    <div className="side-bar-filter">
      <h2 className="title">Colors</h2>
      <div className="input-container">
        <Input handleChange={handleChange} name="colors" label="All" value="" />
        <Input
          handleChange={handleChange}
          name="colors"
          label="Black"
          value="black"
        />
        <Input
          handleChange={handleChange}
          name="colors"
          label="Blue"
          value="blue"
        />
        <Input
          handleChange={handleChange}
          name="colors"
          label="Red"
          value="red"
        />
        <Input
          handleChange={handleChange}
          name="colors"
          label="Green"
          value="green"
        />
        <Input
          handleChange={handleChange}
          name="colors"
          label="White"
          value="white"
        />
      </div>
    </div>
  );
};
export default Colors;
