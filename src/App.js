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
        {/* <FormHeading firstHeading="Welcome! First things first..." secondHeading="You can always change them later." /> */}
        {/* <FormOne label1="Full Name" placeholder1="Steve Job" label2="Display Name" placeholder2="Steve" buttonText="Create Workspace" /> */}
        {/* <FormHeading firstHeading="Let's setup a home for all your work" secondHeading="You can always create another workspace later." /> */}
        {/* <FormTwo label1="Workspace Name" placeholder1="Eden" label2="WorkspaceURL" fadedtext="(optional)" disabledPlaceholder="www.eden.com/" placeholder2="Example" buttonText="Create Workspace" /> */}
        {/* <FormHeading firstHeading="How are you planning to use Eden?" secondHeading="We'll streamline your setup experience accordingly" /> */}
        {/* <FormThree /> */}
        {/* <FormFour />
         */}
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
