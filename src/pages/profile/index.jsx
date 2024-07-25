
import React from 'react';

export const ProfilePage = () => {
    const userName = localStorage.getItem("userName");

    return (
        <div>
            <h1>Bienvenido, {userName}!</h1>
            <p>Este es tu perfil.</p>
        </div>
    );
};
