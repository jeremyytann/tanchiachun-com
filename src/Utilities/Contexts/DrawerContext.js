import { Drawer } from '@mui/material';
import React, { createContext, useState } from 'react'

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(true);
    };

    const handleClose = () => {
        setDrawer(false);
    }

    const methods = { drawer, toggleDrawer }

    return (
        <DrawerContext.Provider value={ methods }>
            <Drawer
                anchor='left'
                open={drawer}
                onClose={() => handleClose()}>
                Drawer
            </Drawer>

            { children }
        </DrawerContext.Provider>
    )
}

export default DrawerProvider