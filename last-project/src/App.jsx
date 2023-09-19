import './App.css'
import './css/style1.css'
import Hero from './components/Hero';
import Pengantar from './components/Pengantar';
// import Contents from './components/Content';
import Footer from './components/Footer';
import Pengantar2 from './components/Pengantar2';
import Imglist from './components/Imglist';
import Sejarah from './components/Sejarah';
// import Jenis from './components/Jenis';

export default function App() {
  return (
    <div className='body'>
      <Hero />
      <Pengantar />
      <Pengantar2 />
      <Sejarah />
      <Imglist />
      {/* <Contents /> */}
      {/* <Jenis /> */}
      <Footer />
    </div>
  )
}