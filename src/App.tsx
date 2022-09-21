import { RocketLaunch} from 'phosphor-react'
import './styles/main.css';

import logoImg from './assets/astronaut.gif';

function App() {
  return (
    <div className="max-w-[1344px] m-auto flex flex-col items-center">
       
    <img className="w-52" src={logoImg} alt="background" />
   

      <h1 className="text-6xl text-white font-black absolute top-40">
        <span className="text-transparent bg-ntg-gradient bg-clip-text">Nostalgia</span> dos games</h1>

       <div className="grid grid-cols-6 gap-6 mt-56">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-1.jpg" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Adventure-Island</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-2.jpg" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Adventure-Island</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-3.jpeg" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Adventure-Island</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-4.jpg" alt="" />
                <div className="pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Adventure-Island</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-5.jpg" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Adventure-Island</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-6.jpg" alt="" />
                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Adventure-Island</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>
        </div>

        <div className="pt-1 bg-ntg-gradient self-stretch mt-8 rounded-lg overflow-hidden">
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white block">Não encontrou seu game?</strong>
              <span className="text-zinc-400 block">Publique um anúncio para encontrar novos games!</span>
            </div>
            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <RocketLaunch size={24} />
              Procurar game
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
