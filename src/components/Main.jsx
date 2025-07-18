
import Maintyle from '../Style/Main.module.css';
const Main = ({ coursesRef })=>{

    return(
        <>
  
  <main>
  <div className={Maintyle.transicion} ref={coursesRef} id="courses"> 
    <section> 
        <div className={Maintyle.containerMain}>  
            <div className={Maintyle.bloqueuno}>
                <h2>Discover Peru Connect's Mission</h2>
            </div>
            <div className={Maintyle.bloquedos}>
                <p className={Maintyle.parr}>Peru Connect is dedicated to connecting users with the vibrant culture and safety insights of Peru. Our mission is to provide a comprehensive platform that fosters community engagement and cultural appreciation. We envision being the leading digital media platform for anyone interested in exploring Peru, ensuring that travelers and residents alike have access to essential information. Key features include an interactive map for safety, user-generated content for shared experiences, and up-to-date news on tourism and gastronomy. </p>
            </div>
        </div>
    </section>
    
    <section>
        <div className={Maintyle.containerdos}>
            <div className={Maintyle.containerbloqueuno}>
                <h2>Discover the Diverse Regions of Peru </h2>
            </div>
            <div className={Maintyle.containerbloquedos}>
                <p className={Maintyle.parr}>Explore the diverse regions of Peru, each offering unique attractions and experiences. From the coastal deserts to the Andean highlands and the Amazon rainforest, Peru Connect provides insights into the best destinations, activities, and cultural experiences in each region. Plan your adventure with us!</p>
            </div>
        </div>
    </section>

 

  </div>
       
</main>

        </>
    )
}


export default Main;