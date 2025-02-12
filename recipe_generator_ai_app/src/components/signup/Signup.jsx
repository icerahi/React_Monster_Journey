import "./Signup.css";

export default function Signup() {
  const handleSignup = (formData) => {
    // const username = formData.get("username");
    // const password = formData.get("password");
    // const status = formData.get("status");
    // const diet = formData.getAll("diet");
    // const favColor = formData.get("favColor");
    // console.log(username, password, status, diet, favColor);
    const data = Object.fromEntries(formData);
    const diet = formData.getAll("diet");
    const allData = {
      ...data,
      diet,
    };
  };
  return (
    <>
      <section className="signup">
        <h1>Signup Form</h1>
        <form action={handleSignup}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <fieldset>
            <legend>Employment Status</legend>
            <label>
              <input type="radio" name="status" value="unemployed" />
              Unemployed
            </label>
            <label>
              <input type="radio" name="status" value="part_time" />
              Part-time
            </label>
            <label>
              <input
                type="radio"
                defaultChecked
                name="status"
                value="full_time"
              />
              Full-time
            </label>
          </fieldset>

          <fieldset>
            <legend> Dietary restriction</legend>
            <label>
              <input type="checkbox" name="diet" value="apple" />
              Apple
            </label>
            <label>
              <input type="checkbox" name="diet" value="biriany" />
              Biriany
            </label>
            <label>
              <input type="checkbox" defaultChecked name="diet" value="fish" />
              Fish
            </label>
          </fieldset>

          <label htmlFor="favColor">What is your favorite color?</label>
          <select name="favColor" id="favColor" defaultValue="" required>
            <option value="">Choose Color</option>
            <option value="orange">orange</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="violet">violet</option>
          </select>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}
