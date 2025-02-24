import Card from "./Card";
import datas from "../data";

export default function Content() {
  return (
    <>
      <article className="content">
        {datas.map((data) => (
          <Card
            key={data.id}
            {...data}
            // data={data}
            // img={data.img}
            // title={data.title}
            // country={data.country}
            // mapLink={data.googleMapsLink}
            // dates={data.dates}
            // description={data.text}
          />
        ))}
      </article>
    </>
  );
}
