import logo from "./logo.svg";
import "./App.css";
import imagesrc from "./imagesrc.png";

function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={imagesrc} className="App-image" alt="Image in src" />
        <br />
        <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <br />
      <img src="imagepublic.jpg" alt="Image in public" />
    </React.Fragment>
  );
}

export default App;
