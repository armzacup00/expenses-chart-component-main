import Header from './component/HeaderComp'
import MainComp from './component/MainComp';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className='main d-block align-content-center'>
      <Header/>
      <MainComp/>
    </div>
  )
}

export default App
