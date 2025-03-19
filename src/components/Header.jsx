import Image from '../../src//assets/img/peru.jpg';
import Headerstyle from '../Style/Header.module.css'


const Header = ()=>{

    return(
        <>
        <header> 
            <div > 
      <img src={Image} className={Headerstyle.imageHeader} />
            </div>
            <div className={Headerstyle.containerteext}>
            <h2>Welcomer to Perú</h2>
            <p>A land of ancient wonders, unique flavors, and unforgettable adventures. Peru awaits you! </p>     
            
            </div>
            <div className={Headerstyle.containerbutton}> 
            <button> See more </button>
            </div>
        </header>
        </>
    )
}

export default Header;