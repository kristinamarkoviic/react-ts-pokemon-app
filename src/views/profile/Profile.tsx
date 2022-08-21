import {FC} from 'react';
import styles from './Profile.module.scss';

export interface IProfilePageProps {};

const ProfilePage: FC<IProfilePageProps> = props => {
    return <div className={styles.profile}>This is profile page.</div>
}

export default ProfilePage;