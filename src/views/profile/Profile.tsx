import { FC, useContext } from 'react';
import styles from './Profile.module.scss';
import { TeamContext } from 'context/TeamContext';
import { Pokemon } from 'components/shared/Pokemon';


const ProfilePage: FC = (props) => {
    const { children } = props;
    const {team} = useContext(TeamContext);

    return (
        <>
            <div className={styles.page}>
                { team.map((member) => 
                   <Pokemon teamDisplay={true} pokemon={ member }/>
                )
                }
            </div>
        </>
    )
}


export default ProfilePage;