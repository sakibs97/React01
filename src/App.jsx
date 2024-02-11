import Team from "./components/team/Team"
import Banner from "./components/banner/Banner"
import { Navbar } from "./components/navbar/Navbar"
import Service from "./components/service/Service"
import Care from "./components/care/Care"
import News from "./components/news/News"
import Footer from "./components/footer/Footer"


function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Team/>
      <Care/>
      <News/>
      <Footer/>
    </>
  )
}

export default App
