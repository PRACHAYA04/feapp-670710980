import Header from "./components/Header";
import MovieList from "./components/Movielist";
import Footer from "./components/Footer";   

import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="ฝน" year={3} />
      <Greeting name="เต้ย" year={2} />
      <Greeting name="มายด์" year={4} />
    </div>
  );
}

export default App;