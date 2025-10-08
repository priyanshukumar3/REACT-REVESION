import './App.css'
import ClockHeading from './Conponents/ClockHeading';
import ClockSlogan from './Conponents/ClockSlogan'
import CurrentTime from './Conponents/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />

    </center>
    
  )
}

export default App
