import { useState } from 'react';

import { ListItemText, ListItemButton } from '@mui/material';
import styles from './Header.module.scss';

import { Route as Route } from '../../../types/Route';
import routes from '../../../config/routes';

import { Link } from 'react-router-dom';

export const Header = () => {
    // Typo in setter
    const [routesState, setRoutesStage] = useState<Route[]>(routes);
    
    return (
        <>
            <header className={styles.header}>
                {routesState.map((route: Route) => (
                    <Link
                        key={route.key}
                        to={{
                        pathname: route.path,
                        }}
                    >
                        <ListItemButton className={styles.navTab}>
                            <ListItemText className={styles.navLink} primary={ route.title } />
                        </ListItemButton>
                    </Link> 
                ))}
            </header>
        </>
    )
}

export default Header;