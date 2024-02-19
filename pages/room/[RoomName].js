
import React from 'react';
import { StoreContext } from '../../Context/StoreContextProvider';
const Room = () => {
    const { name } = React.useContext(StoreContext);
    return (
        <div>
            Room {name}
        </div>
    )
}

export default Room;