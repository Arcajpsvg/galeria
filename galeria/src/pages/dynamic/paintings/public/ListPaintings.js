import { Component } from "react";
import PostP from "./../datagen/PostP";
import './ListPaintings.css';
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
                                    <h2>{post.title}</h2>
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
                <button name="pasar" type="button">
                <Link to='/paintingsprivate'>Private Form</Link>
</button>
            </section>
        )
    }
}

export default ListPaintings;
/* import { Component } from "react";
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

export default Paintings;*/