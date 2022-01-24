import React from 'react';

import style from './Footer.module.css'

const Footer = () => {

    return (
        <div className={style.footer}>
            <p>Created by <a href="https://github.com/NickBreznitskyi">Nick Breznitskyi</a> {new Date().getFullYear()}
            </p>
        </div>
    );
};

export {Footer};