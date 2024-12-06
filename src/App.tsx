
import './App.css'
import Animal from './Animal'
import Exibicao from './Exibicao'
function App() {

  return (
    <div className='app'>
     
      <Exibicao inicio={ new Date("2024-11-06T16:00:00.000-03:00")} fim={new Date()} local='aaa'>
        <Animal nome='leao' icone='🦁' peso={10} extinção={false}/>
        <Animal nome='tigre' icone='🐯' peso={0} extinção={true}/>
        <Animal nome='girafa' icone='🦒' peso={0} extinção={false}/>
      </Exibicao>
    </div>
  )
}

export default App
