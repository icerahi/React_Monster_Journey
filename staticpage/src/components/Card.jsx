export default function Card(props) {
  const { img, title, country, mapLink, dates, text: description } = props;

  return (
    <section>
      <div className="card">
        <div className="img-container">
          <img src={img.src} alt="" />
        </div>
        <div className="card_content">
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>{" "}
            <p
              className="country"
              style={{
                color: country.toLowerCase() === "japan" ? "crimson" : "green",
              }}
            >
              {country}
            </p>
            {/* {mapLink && <a href={mapLink}>View on Google Maps</a>} */}
            {mapLink && <a href={mapLink}>View on Google Maps</a>}
          </div>
          <h1 className="title">{title}</h1>
          <p className="date">
            <strong>{dates}</strong>
          </p>
          <p className="description">{description}</p>
        </div>
      </div>
    </section>
  );
}
