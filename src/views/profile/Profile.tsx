import { FC } from 'react';
import styles from './Profile.module.scss';



const ProfilePage: FC = (props) => {
    const { children } = props;
    return (
        <>
            <div className={styles.page}>
                This is profile page.
            </div>
        </>
    )
}


export default ProfilePage;