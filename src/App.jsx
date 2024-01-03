import './App.css'
import Content from './components/Content'
import Header from './components/Header'

function App() {

  return (
    <div className='bg-blue '>
      <div className='container-wrapper md:flex md:flex-row-reverse md:p-4 lg:flex lg:flex-row-reverse lg:p-4'>
        <Header/> 
        <Content/>
      </div>
    </div>
  )
}

export default App
