import logo from './g_logo.png';
import './mainpage.css'

const Header= ({subtitle}) => (
 <header className="row">
     <span className="col-md-5">
         <img src={logo} className='logo align-center' alt='logohere' />
     </span>
     <span className="col-md-7 subtitle">
        {subtitle} 
         </span>
 </header>

);

export default Header