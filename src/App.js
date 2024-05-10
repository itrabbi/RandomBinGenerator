import './App.css';
import Footer from './Footer';
import Header from './Header';
import RandomBinGenerator from './RandomBinGenerator';

function App() {
  console.log("Rabbi Sudo (itrabbi.com)")
  return (
    <>
    <Header />
    <RandomBinGenerator />
    {/* <div className='footer' >
    <Footer />
    </div> */}
    </>
  );
}

export default App;
