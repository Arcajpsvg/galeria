import places from './../datagen/ArchiData';
import './ArchiList.css';
import {Link} from "react-router-dom";

export default function ArchiList(){
    let localArreglo = localStorage.getItem('listArchi') ? Array.from(JSON.parse(localStorage.getItem('listArchi'))) : [];
    let arregloCombinado = places.concat(localArreglo);
    return(
    <section id="public-arch-list">
    <header>
        <h1>Lista de Edificaciones</h1>
    </header>
    {
        arregloCombinado.map(edificacion => 
            <article key={edificacion.id}>
                <header>
                    <h2>Name: {edificacion.name}</h2>
                </header>
                <p>Description: {edificacion.description}</p>
                <p>Location: {edificacion.location}</p>
                <p>Construction year: {edificacion.constructionYear} {edificacion.constructionYear < 0 ? 'BC' : 'AD'}</p>
                <span>Author: {edificacion.author}</span>

            </article>)
    }
    <p id='arch-link-control'>
    <Link to='/archiprivate' id='private-arch-link'>Private area</Link>
    </p>
</section>
);
}