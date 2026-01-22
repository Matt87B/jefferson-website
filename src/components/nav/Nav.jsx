import styles from "./Nav.module.css"

function Nav(){
    return(
        <nav>
                <ul className={styles.ul}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
        </nav>
    );
}
export default Nav