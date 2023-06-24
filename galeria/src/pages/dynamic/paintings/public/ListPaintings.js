import { Component } from "react";
import PostP from "./../datagen/PostP";
import './ListPaintings.css';
import {Link, Outlet} from 'react-router-dom';

class ListPaintings extends Component{
    render()
    {
        return(
            
            <section>
                <header id="painting_list_header">
                    <h1>Lista de Pinturas</h1>
                </header>
                {
                    PostP.map(post=>
            
                        <section key={post.id} className="painting_post">
                            <header>  
                                    <h2>{post.title}</h2>
                            </header>
                            <>
                            <figcaption><img src={post.image}/></figcaption> 
                            </>
                            <p>Autor: {post.author}</p>
                            <p>Fecha:{post.year}</p>
                            <p>Estilo:{post.style}</p>
                            <p>Precio:{post.price}</p>
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
}

export default ListPaintings;
