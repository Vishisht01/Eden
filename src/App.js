import './App.css';
import Heading from './Components/MainHeading';
import PageOne from './Pages/PageOne'
import PageTwo from './Pages/PageTwo'
import PageThree from './Pages/PageThree'
import PageFour from './Pages/PageFour'
import Stepper from './Components/Stepper';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading namehead="Eden" />
        <Stepper />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="Workspace" element={<PageTwo />} />
            <Route path="Workspace/Card" element={<PageThree />} />
            <Route path="Workspace/Card/Success" element={<PageFour />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
