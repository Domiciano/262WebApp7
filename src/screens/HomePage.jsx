import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {getCourses} from '../services/CourseServices';

function HomePage(){
    const [cursos, setCursos] = useState([]);
    const token = localStorage.getItem('accessToken');

    //Zona del useEffect
    useEffect(() => {
        if (!token) return;
        //Llamado al API y guardando los elementos en el estado
        getCourses({token:token}).then((cursos) => setCursos(cursos));
    }, [token]);

    //Sin token no hay pantalla de inicio
    if (!token) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <h1>Lista de cursos</h1>
            <ul>
                {cursos.map((curso) => (
                    <li key={curso.publicId}>{curso.name} · {curso.credits} créditos</li>
                ))}
            </ul>
        </>
    );
}

export default HomePage;
