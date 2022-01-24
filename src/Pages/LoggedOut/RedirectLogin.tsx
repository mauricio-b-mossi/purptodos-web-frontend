import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectLogin() {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/Login');
    }, []);
    

    return (
      <></>
  );
}
