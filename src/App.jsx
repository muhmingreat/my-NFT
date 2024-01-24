import Alert from './components/Alert.jsx'
import Artworks from './components/Artworks'
import CreateNFT from './components/CreateNFT'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading.jsx'
import ShowNFT from './components/ShowNTF.jsx'
import Transaction from './components/Transaction'
import UpdateNFT from './components/UpdateNFT.jsx'
const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-hero'>
      <Header/>
      <Hero/>
      </div>
      <Artworks/>
      <Transaction/>
      <Footer/>
      <CreateNFT/>
      <ShowNFT/>
      <UpdateNFT/>
      <Loading/>
      <Alert/>
    </div>
  )
}

export default App
