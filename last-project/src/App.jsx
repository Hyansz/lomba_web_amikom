import './App.css'
import './css/style1.css'
import Hero from './components/Hero';
import Pengantar from './components/Pengantar';
import Contents from './components/Content';

export default function App() {
  return (
    <div className='body'>
      <Hero />
      <Pengantar />
      <Contents />
    </div>
  )
}
