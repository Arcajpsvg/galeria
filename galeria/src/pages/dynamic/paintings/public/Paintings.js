import { Component } from "react";
import posts from "../../data/post";
import {Link, Outlet} from 'react-router-dom';

class Paintings extends Component{
    render()
    {
        return(
            <section>
                <header>
                    <h1>Lista de Pinturas</h1>
                </header>
                {
                    posts.map(post=>
                        <article key={post.id}>
                            <header>
                                <Link to={"/painting/" + post.id}>
                                    <h2>{post.title}</h2>
                                </Link>
                            </header>
                            <img>
                                {post.image}
                            </img>
                            <span>{post.author}</span>
                            <span>{post.style}</span>
                        </article>
                    )
                }
            </section>
        )
    }
}

export default Paintings;