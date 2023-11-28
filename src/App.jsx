import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas,Education} from './components'

const App = () =>{

  return (
    <BrowserRouter>
    <div className = "relative z-0 bg-primary">

      <div className="bg bg-cover bg-no-repeat bg -center">
        <Navbar />
        <Hero />
      </div>

      <About/>
      <Experience/>
      <Tech />
      <Works />
      <StarsCanvas />
      <div className="relative z-0">
        <Contact />
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App
