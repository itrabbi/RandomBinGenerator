import './App.css';
import Footer from './Footer';
import RandomBinGenerator from './RandomBinGenerator';

function App() {
  console.log("Rabbi Sudo (itrabbi.com)")
  const footerStyle = {
    backgroundColor: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  return (
    <>
    <RandomBinGenerator />
    <div style={footerStyle}>
    <Footer />
    </div>
    </>
  );
}

export default App;
