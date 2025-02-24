import { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "one edoes not simple",
    bottomText: "walk in to morder",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setImages(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.currentTarget;

    setMeme((prevData) => ({ ...prevData, [name]: value }));
  }

  const getImage = () => {
    const img = Math.floor(Math.random() * images.length);
    setMeme({ ...meme, imgUrl: images[img].url });
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <main>
      <form action={getImage}>
        <div className="input_container">
          <div>
            <label htmlFor="toptext">Top Text</label> <br />
            <input
              onChange={handleChange}
              id="toptext"
              type="text"
              value={meme.topText}
              name="topText"
            />
          </div>
          <div>
            <label htmlFor="bottomText">Buttom Text</label> <br />
            <input
              onChange={handleChange}
              id="bottomText"
              type="text"
              value={meme.bottomText}
              name="bottomText"
            />
          </div>
        </div>
        <br />
        <button>Get a net meme image</button>
      </form>
      <div className="img_container">
        <h1
          draggable
          onDrag={handleDrag}
          style={{ left: position.x, top: position.y, cursor: "pointer" }}
          className="topText"
        >
          {meme.topText}
        </h1>
        <h1 className="bottomText">{meme.bottomText}</h1>
        <img src={meme.imgUrl} alt="" />
      </div>
    </main>
  );
}
