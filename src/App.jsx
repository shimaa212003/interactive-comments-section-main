import Comments from "./Components/Comments"
import data from "./data.js"

function App() {
  const currentUser = data.currentUser
  console.log(currentUser)
  return (
    <div className="App">
      <Comments currentUser={currentUser} />
    </div>
  );
}

export default App;
