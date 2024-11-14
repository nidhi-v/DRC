
import './App.css';
import Mid from './components/Cmmain/Mid';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Tabs from './components/Tabs/Tabs';
function App() {
  return (
    <div >
      {/* <img src='/images/drc-logo.png'></img> */}
      <Navbar/>
      <Mid/>
      <Tabs/>
      <Footer/>
    </div>
  );
}

export default App;
