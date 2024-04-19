import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Cardspage from "./pages/Cardspage"
import PortfolioCard from "./pages/PortfolioCard"
import TradeSection from "./pages/TradeSection"
import Investor from "./pages/Investor"
const App = () => {
  return (
    <div >
      <Home/>
      <Signup/>
      <Cardspage/>
      <PortfolioCard/>
      <TradeSection/>
      <Investor/>
    </div>
  )
}

export default App