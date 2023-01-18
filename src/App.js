import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </header>
      <body className="App-main">
        <h1 className="Title">QUArch</h1>
        <div className="Section-Container">
          <p className="Section">Team</p>
          <p className="Section">Assignments</p>
          <p className="Section">More</p>
        </div>
      </body>
      <footer>
        <div className="Section-Container">
          <p className="Section">
            contact us
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
