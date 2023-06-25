import { Component } from "react";
import PostP from "./../datagen/PostP";
import './ListPaintings.css';
import {Link, Outlet} from 'react-router-dom';

function ListPaintings() {

    if(!localStorage.getItem('paintingList')){
        let faker_list = JSON.stringify(PostP);
        localStorage.setItem('paintingList', faker_list);
        }
    let definitivePaintingList = JSON.parse(localStorage.getItem('paintingList')) || [];

        return(
            
            <section>
                <header id="painting_list_header">
                    <h1>Lista de Pinturas</h1>
                </header>
                {
                    definitivePaintingList.map(paintingList=>
            
                        <section key={paintingList.id} className="painting_post">
                            <header>  
                                    <h2>{paintingList.titulo}</h2>
                            </header>
                            <>
                            <figcaption><img src={paintingList.imagen}/></figcaption> 
                            </>
                            <p>Autor: {paintingList.autor}</p>
                            <p>Fecha:{paintingList.anno}</p>
                            <p>Estilo:{paintingList.estilo}</p>
                            <p>Precio:{paintingList.precio}</p>
                            <span></span>
                           
                        </section>
                    )
                }
                 <button name="pasar" type="button" id="pass">
                <Link to='/paintingsprivate'>Private Form</Link>
</button>
            </section>
        )
    }


export default ListPaintings;
