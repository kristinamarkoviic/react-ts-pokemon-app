import { useState } from 'react';

import { ListItemText, ListItemButton } from '@mui/material';
import styles from './Header.module.scss';

import { Route as Route } from '../../../types/Route';
import routes from '../../../config/routes';

export const Header = () => {
    const [routesState, setRoutesStage] = useState<Route[]>(routes);
    
    return (
        <>
            <div className={styles.header}>
                {routesState.map((route: Route) => (
                    <ListItemButton component="a" key={route.key} href={route.path} >
                        <ListItemText primary={ route.title } />
                    </ListItemButton>
                ))}
            </div>
        </>
    )
}

export default Header;