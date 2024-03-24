import './App.css'
import Aboutme from './Component/Aboutme'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Service from './Component/Service'
import { services } from './services'
import { data} from './data'
import Portfolio from './Component/Portfolio'
import Footer from './Component/Footer'
import Plus from './Component/Plus'
import Contact from './Component/Contact'

function App() {

  return (
    <>  
      <div className="share-button">
        <span>

          <i className="fas fa-share-alt"></i>
        </span>

        <a href="https://twitter.com/gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-twitter" ></i></a>

        <a href="http://www.linkedin.com/shareArticle?url=https://portfolioreact-blush.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>

        <a title="Whatsapp" href="https://api.whatsapp.com/send?text=Mira%20este%20portafolio%20https://portfolioreact-blush.vercel.app/ " target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>

       
      </div> 
<Navbar />
<Home />
<Aboutme data = {data} />
<Service services={services}/>
<Portfolio />
<Plus />
<Contact />
<Footer />
 
      
    </>
  )
}

export default App
