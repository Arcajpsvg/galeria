import places from './../datagen/ArchiData';
import './ArchiList.css';
import {Link} from "react-router-dom";

export default function ArchiList(){
    console.log('places pone:', places);
    let localArreglo = Array.from(JSON.parse(localStorage.getItem('listArchi')));
    let arregloCombinado = places.concat(localArreglo);
    console.log('el combinado pone', arregloCombinado);
    return(
    <section id="public-arch-list">
    <header>
        <h1>Lista de Edificaciones</h1>
    </header>
    {
        arregloCombinado.map(post => 
            <article key={post.id}>
                <header>
                    <h2>Name: {post.name}</h2>
                </header>
                <p>Description: {post.description}</p>
                <p>Location: {post.location}</p>
                <p>Construction year: {post.constructionYear} {post.constructionYear < 0 ? 'BC' : 'AD'}</p>
                <span>Author: {post.author}</span>

            </article>)
    }
    <p id='arch-link-control'>
    <Link to='/archiprivate' id='private-arch-link'>Private area</Link>
    </p>
</section>
);
}