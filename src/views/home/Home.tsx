import {FC} from "react";
import styles from './Home.module.scss';

export interface IHomePageProps {};

//shorthand
const HomePage: FC<IHomePageProps> = props => {
    return <div>This is home page.</div>
}

//const HomePage: React.FunctionComponent<IHomePageProps> = props => {}

export default HomePage;
