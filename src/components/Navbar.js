import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.h1}>Dojo-Blog</h1>
            <div className={styles.div}>
                <h4>Testing the React Skills</h4>
            </div>
        </nav>
    );
};

export default Navbar;
