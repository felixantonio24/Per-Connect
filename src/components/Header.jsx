import Image from '../../src//assets/img/peru.jpg';
import Headerstyle from '../Style/Header.module.css';


const Header = ({ onScrollToCourses })=>{


    
    return(
        <>
        <header> 
            <div > 
      <img src={Image} className={Headerstyle.imageHeader} />
            </div>
            <div className={Headerstyle.containerteext}>
            <h2 className={Headerstyle.tittleheader}>Welcome to Perú</h2>
            <p className={Headerstyle.headerparrafo}>A land of ancient wonders, unique flavors, and unforgettable adventures. Perú awaits you! </p>
            </div>
            <div className={Headerstyle.containerbutton}> 
            <button onClick={onScrollToCourses}> See more </button>
            </div>
        </header>
        </>
    )
}

export default Header;