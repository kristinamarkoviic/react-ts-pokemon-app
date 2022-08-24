import { useState } from 'react';

import { ListItemText, ListItemButton } from '@mui/material';
import styles from './Header.module.scss';

import { Route as Route } from '../../../types/Route';
import routes from '../../../config/routes';

export const Header = () => {
    // Typo in setter
    const [routesState, setRoutesStage] = useState<Route[]>(routes);
    
    return (
        <>
            <header className={styles.header}>
                {routesState.map((route: Route) => (
                    <ListItemButton className={styles.navTab} component="a" key={route.key} href={route.path} >
                        <ListItemText className={styles.navLink} primary={ route.title } />
                    </ListItemButton>
                ))}
            </header>
        </>
    )
}

export default Header;