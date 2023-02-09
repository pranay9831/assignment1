import NavBar from './component/NavBar';
import Movie from './component/Movie';
import Home from './component/Home';
import Music from './component/Music';
import Books from './component/Books';
function App() {

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home

      break

    case "/movies":

      Component = Movie
      break

    case '/books':
      Component = Books
      break

    case '/music':
      Component = Music
      break

  }

  
  return (
    <div className="App">
    <>
     <NavBar />
     <Component/>
     </>

    </div>
  );
}

export default App;
