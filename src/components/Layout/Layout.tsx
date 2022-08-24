import { FC } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../shared/Header/Header';
import { Footer } from '../shared/Footer/Footer';

const Layout: FC = (props) => {
    const { children } = props;

    // Could this be a good place to use the main tag?
    return (
        <>
            <div className={styles.mainConatainer}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout;

