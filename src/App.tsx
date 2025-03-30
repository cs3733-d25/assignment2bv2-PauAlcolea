import './App.css'
import Title from './components/Title'
import Intro from './components/Intro'
import Hobby1 from './components/Hobby1'
import Hobby2 from './components/Hobby2'

function App() {
  return (
    <div className="app-container">
      <Title />
      <Intro name1="An Phan" name2="Pau Alcolea" />
      <Hobby1 />
      <Hobby2 />
    </div>
  )
}

export default App
