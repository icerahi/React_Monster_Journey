import "./Recommended.css";

const Recommended = ({ handleClick, companies }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button onClick={handleClick} className="btns" value="">
          All Products
        </button>

        {companies.map((company) => (
          <button
            key={company}
            onClick={handleClick}
            className="btns"
            value={company}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Recommended;
