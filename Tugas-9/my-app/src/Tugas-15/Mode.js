import React, { useContext } from "react";
import Nav from '../Tugas-15/Nav';
import { TemaContext } from './Tema';
import './Color.css';

const Mode = () => {
    const[tema] = useContext(TemaContext);
    return (
        <div>
            <Nav />
        </div>
    );
};