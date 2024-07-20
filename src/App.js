import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  return (
  <>
  <Navbar title="textUcorrect"/>
  <div className='container my-3'>
  <Textform heading="Enter text to analyze"/>
 {/*<About/>*/}
  </div>
 
  </>
  );
}

export default App;
