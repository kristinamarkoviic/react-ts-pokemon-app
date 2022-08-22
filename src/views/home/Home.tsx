import {FC} from "react";
import styles from './Home.module.scss';
import { Header } from "components/shared/Header/Header";
import routes from '../../config/routes';
import { Route } from '../../types/Route';

import { APP_TITLE, PAGE_TITLE_HOME } from '../../utils/constants';

export interface IHomePageProps {
    
};

// //shorthand
const HomePage: FC<IHomePageProps> = props => {
    return (
        <>
            <div className={styles.home}>
                <h1>
                    {PAGE_TITLE_HOME} | {APP_TITLE}
                </h1>
            </div>
            
        </>
    )
}


export default HomePage;
