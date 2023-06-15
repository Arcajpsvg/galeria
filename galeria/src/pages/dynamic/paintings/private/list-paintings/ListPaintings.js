import { Component } from "react";
import PostP from "../datagen/PostP";
import {Link, Outlet} from 'react-router-dom';

class ListPaintings extends Component{
    render()
    {
        return(
            <section>
                <header>
                    <h1>Lista de Pinturas</h1>
                </header>
                {
                    PostP.map(post=>
                        <article key={post.id}>
                            <header>
                                <Link to={"/titulo/" + post.id}>
                                    <h2>{post.title}</h2>
                                </Link>
                            </header>
                            <p>
                                {post.image}
                            </p>
                            <span>{post.author}</span>
                            <span>{post.style}</span>
                            <span></span>
                        </article>
                    )
                }
            </section>
        )
    }
}

export default Noticias;