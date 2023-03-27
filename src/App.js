import img1 from './components/imgs/Group (1).png'
import img2 from './components/imgs/Group (2).png'
import img3 from './components/imgs/Group 12 (1).png'
import img4 from './components/imgs/ic-actions-settings.png'
import img5 from './components/imgs/user-access-svgrepo-com 1.png'
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
<div>
<div className='left_menu'>
<nav>
  <ul>
    <li><Link to='/'><img src={img1} alt="USERS"/><span>Statistika</span></Link></li>
    <li><Link to='/amallar'><img src={img4} alt="USERS"/><span>Amallar</span></Link></li>
    <li><img src={img5} alt="USERS"/><span>Ruxsatlar</span></li>
    <li><img src={img2} alt="USERS"/><span>Hisobotlar</span></li>
    <li><img src={img3} alt="USERS"/><span>Call-markaz</span></li>
  </ul>
</nav>

   </div>
   <Outlet/>
</div>
  );
}

export default App;
