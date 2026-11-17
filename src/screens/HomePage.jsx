import { useEffect, useState } from 'react';
import {getCourses} from '../services/CourseServices';

function HomePage(){

    async function handleGetCourses(){
        let token = localStorage.getItem('accessToken');
        let cursos = await getCourses({token:token});
        console.log(cursos);
    }

    //Zona del useEffect
    useEffect(() => {
        console.log(12);
        //Llamado al API
        handleGetCourses();
        //Guardando los elemento los elementos en el estado
        //setCursos(cursos);

    }, []);


    return (
        <>
            <h1>Lista de cursos</h1>
        </>
    );
}

export default HomePage;