const MainComponent = ({ data }) => {
  return (
    <main>
      <h2>Main Content</h2>
      <ul>
        {data.map((item) => (
          <>
            <li key={item.id}>{item.title}</li>
            <li key={item.id}>{item.body}</li>
          </>
        ))}
      </ul>
    </main>
  );
};
export default MainComponent;
