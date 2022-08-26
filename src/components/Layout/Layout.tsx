import { FC } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../shared/Header/Header';
import { Footer } from '../shared/Footer/Footer';
import { TeamContextProvider } from 'context/providers/TeamContextProvider';

const Layout: FC = (props) => {
    const { children } = props;
    return (
        <main>
            <div className={styles.mainConatainer}>
                <Header/>
                <TeamContextProvider>
                    {children}
                </TeamContextProvider>
                <Footer/>
            </div>
        </main>
    )
}

export default Layout;

