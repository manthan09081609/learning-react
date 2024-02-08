import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-black rounded-xl p-4 bg-green-600 mb-4">
        Hello World
      </h1>
      <Card
        username="rashi"
        image={
          "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        }
      />
      <Card
        image={
          "https://images.pexels.com/photos/1105058/pexels-photo-1105058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
    </>
  );
}

export default App;
