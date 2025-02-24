const Input = ({ name, value, label, handleChange }) => {
  return (
    <label>
      <input onChange={handleChange} type="radio" name={name} value={value} />
      {label}
    </label>
  );
};
export default Input;
