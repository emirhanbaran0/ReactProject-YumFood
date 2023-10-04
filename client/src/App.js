import Footer from './components/Footer';
import Newsletter from './components/Newsletter'; 
import Categories from './components/Categories';
import Meal from './components/Meal'
import TopPicks from './components/TopPicks'
import Delivery from "./components/Delivery"
import Featured from "./components/Featured";
import TopNov  from "./components/TopNov";



function App() {
  return (
    <div className="App">
          <TopNov />
          <Featured />
          <Delivery />
          <TopPicks />
          <Meal />
          <Categories/>
          <Newsletter/>
          <Footer />
    </div>
  );
}

export default App;
