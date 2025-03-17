import styles from '../Style/Nav.module.css';
import React from 'react';


const Nav = ()=> {
    return(
        <>
     <nav className={styles.containerNav}> 
        <div>
            <span className={styles.spantitle}>Perú Connect</span>
        </div>
        <ul className={styles.containerli}>
            <li>About</li>
            <li>Safety in Perú</li>
            <li>Contact Us</li>
            <li>News</li>
            <li>Tourims</li>
        </ul>
     </nav>
        </> 
    )
 
}

export default Nav