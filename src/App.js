import { NavBar } from './components/Navbar';
import { Quotes } from './components/Quotes';
import { AgeCalculator } from './components/AgeCalculator';
import { CalendarPage } from './components/Calendar';
import { HomePage } from './components/Home';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AgeCalculator /> 
      <CalendarPage />
      <Quotes />
    </div>
  );
}

export default App;
