import {useContext} from 'react';
import {AuthContext} from '../navigations/AuthProvider';

export const useUid = () => useContext(AuthContext).user.uid;
