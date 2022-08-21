import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Context } from '..';
import Auth from "../pages/Auth";
import Contacts from "../pages/Contacts";

const AppRouter: React.FC = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.userId ?
            <Route path="*" element={<Contacts/>}/>
            :
            <Route path="*" element={<Auth/>}/>
            }
        </Routes>
    )
})

export default AppRouter