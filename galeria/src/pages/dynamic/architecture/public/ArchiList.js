import places from './../datagen/ArchiData';
import './ArchiList.css';
import {Link} from "react-router-dom";

export default function ArchiList(){
    return(
    <section id="public-arch-list">
    <header>
        <h1>Lista de Edificaciones</h1>
    </header>
    {
        places.map(post => 
            <article key={post.id}>
                <header>
                    <h2>{post.name}</h2>
                </header>
                <p>{post.description}</p>
                <span>{post.author}</span>

            </article>)
    }
    <p id='arch-link-control'>
    <Link to='/archiprivate' id='private-arch-link'>Private area</Link>
    </p>
</section>
);
}