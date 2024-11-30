import React, { useState, useEffect } from 'react';

const ProfileEs = () => {
    useEffect(() => {
        console.log('Componente ProfileEs montado');
    }, []);

    return (
        <div>
            <h1>Bienvenido a tu perfil</h1>
            <p>Este es el componente del perfil</p>
        </div>
    );
};

export default ProfileEs;

