import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Todo from "./components/Todo";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content.js";
import Form from "./components/Form.jsx";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => {
          return (
            <Accordion key={Math.random()} title={title} content={content} />
          );
        })}
      </div> */}
      <Form />
    </>
  );
}

export default App;
