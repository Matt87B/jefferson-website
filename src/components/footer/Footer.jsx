import styles from "./Footer.module.css"

function Footer(){
    const currentDate = new Date();
    return (
        <footer className={styles.footer}>
            <p>
                <a className={styles.link} href="#">Privacy Policy</a> |&nbsp;
                <a className={styles.link} href="#">Cookies Notice</a> |&nbsp;
                <a className={styles.link} href="#">Conditions of Use</a>
            </p>
            <p>&copy; 1987-2026, Jefferson Inc.</p>
            <address>
                Written by <a className={styles.link} href="mailto:matthew.bowman@torontomu.ca">Matthew Bowman</a>.
            </address>
        </footer>
    );
}
export default Footer