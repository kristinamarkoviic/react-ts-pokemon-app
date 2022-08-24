import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
            <footer className={ styles.footer}>
                <p className={styles.footerText}> Pokemon app made by Kristina Markovic  &copy; 2022  </p>
            </footer>
        </>
    )
}

export default Footer;