import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../../Store/slice/AuthSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        localStorage.clear();
        navigate('/login');
    }, [dispatch, navigate]);

    return <Navigate to="/login" />;
};

export default LogOut;
