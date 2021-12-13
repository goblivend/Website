import './App.css';
import Button from './pages/button';
import Home from './pages/home';
import Header from './pages/header';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';


function App() {
  return (
    <>
      <Header />
      <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
      <p className="tracking-widest">This is my first React App.</p>
      <Button Mycomponent={<Home />} cmpName="Home" />
      <Button Mycomponent={<Aboutme />} cmpName="Aboutme" />
      <Button Mycomponent={<Projects />} cmpName="Projects" />

    </>
  );
}

export default App;
