
import './App.css';
// import Greeter from './components/Greeter';
// import CounterExercise from './components/CounterExercise';
import Timestamp from './components/Timestamp'
import TimestampClock from './components/TimestampClock';
import Translator from './components/Translator';  
import FriendProps from './components/FriendProps';
import NameField from './components/NameField';
import StarRating from './components/StarRating';




function App() {

  return (
    <div className="App">
      <TimestampClock />
      <Timestamp />
      <Translator initialText="Hello World"/>
      <FriendProps friendName="Bob Belcher"/>
      <NameField firstName="Steve" lastName="Rogers" />
      <StarRating rating={4}/>
    </div>
  );
}

export default App;
