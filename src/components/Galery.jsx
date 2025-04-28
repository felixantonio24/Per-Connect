import StyleGalery from "../Style/Galerty.module.css";
import Images from "../../src//assets/img/costa.webp";
import Img2 from "../assets/img/selva-img.avif";
import Img3 from "../assets/img/sierra.jpg"

const Galery = () =>{

    return(
        <>
        <main> 
        <div className={StyleGalery.Container}>
            <div className={StyleGalery.CoastContainer}>
                <h2>Coast Region</h2>
                <img src={Images} className={StyleGalery.ImgCoast} alt="CoastRegion-Photo" />
                
            </div>
            <div className={StyleGalery.JungleContainer}>
                 <h2>Jungle Region</h2>
                 <img src={Img2} className={StyleGalery.ImgJungle} alt="region-jungle-Photo" />
            </div>
            <div className={StyleGalery.SierraContainer}> 
                <h2> Andean Region</h2>
                <img src={Img3} className={StyleGalery.ImgSierra} alt="Andean-Region-Photo" />
            </div>
        </div>
        </main>
        </>
    )
}
export default Galery;
