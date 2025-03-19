import Image from '../../src//assets/img/peru.jpg';
import Headerstyle from '../Style/Header.module.css'


const Header = ()=>{

    return(
        <>
        <header> 
            <div > 
      <img src={Image} className={Headerstyle.imageHeader} />
            </div>
            <h2>Welcomer to Perú</h2>
        </header>
        </>
    )
}

export default Header;