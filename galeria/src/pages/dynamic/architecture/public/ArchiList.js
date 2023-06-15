import places from './../datagen/ArchiData';
import './ArchiList.css';
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
</section>
);
}