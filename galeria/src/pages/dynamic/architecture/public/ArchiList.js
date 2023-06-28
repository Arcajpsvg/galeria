import places from './../datagen/ArchiData';
import './ArchiList.css';
import {Link} from "react-router-dom";

export default function ArchiList(){
    if(!localStorage.getItem('listArchi')){
        let jsonList = JSON.stringify(places);
        localStorage.setItem('listArchi', jsonList);
        }
    let localArreglo = JSON.parse(localStorage.getItem('listArchi')) || [];
  

    return(
        <> 
    <section id="public-arch-list">
    <header>
        <h1>Lista de Edificaciones</h1>
    </header>
    {
        localArreglo.map(edificacion => 
            <article key={edificacion.id} className='architecture-item'>
                <header>
                    <h2>Name: {edificacion.name}</h2>
                </header>
                <p>Description: {edificacion.description}</p>
                <p>Location: {edificacion.location}</p>
                <p>Construction year: {edificacion.constructionYear} {edificacion.constructionYear < 0 ? 'BC' : 'AD'}</p>
                <span>Author: {edificacion.author}</span>

            </article>)
    }

</section>
 {sessionStorage.getItem('token') && <p id='arch-link-control'>
    <Link to='/archiprivate' id='private-arch-link'>Private area</Link>
    </p> }</>
);
}