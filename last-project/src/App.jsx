import './App.css'
import './css/style1.css'
import Hero from './components/Hero';
import Pengantar from './components/Pengantar';
import Contents from './components/Content';
import Footer from './components/Footer';
import Jenis from './components/Jenis';

export default function App() {
  return (
    <div className='body'>
      <Hero />
      <Pengantar />
      <Contents />
      <Jenis />
      <Footer />
    </div>
  )
}
