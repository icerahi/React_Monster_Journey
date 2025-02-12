const { createRoot } = ReactDOM;
const { Fragment } = React;
const root = createRoot(document.getElementById("root"));

function NavBar() {
  return (
    <nav className="navbar">
      <div className="img-container">
        <img width="40px" src="/asset/react_logo.png" />
      </div>
      <h1 className="title">ReactFacts</h1>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>@2025 Imran Hasan Development. All right reserved.</p>
    </footer>
  );
}

root.render(
  <Fragment>
    <NavBar />
    <main>
      <h1 className="main_header">Fun facts about React</h1>
      <img className="main_bg" src="/asset/react_bg.png" alt="" />
      <ul>
        <li>Was first realsed in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile app</li>
      </ul>
    </main>
    <Footer />
  </Fragment>
);
