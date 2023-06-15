import { Component } from "react";

export default class ArchiForm extends Component{

constructor(){
    super();
    this.state = {id: 0, name: '', description: '', constructionDate: '', author: '', location: ''};
}


render(){
   let {name, description, constructionDate, author, location} = this.state;

   return(
    <article>
        <header>
            <h1>Architecture form</h1>
        </header>
        <main>
            <form>
                <p>
                    <label>Name
                        <input type="text" name="name" value={name} />
                    </label>
                </p>
                <p>
                    <label>Description
                        <textarea name="description" value={description} />
                    </label>
                </p>
                <p>
                    <label>Date of construction
                        <input type="date" name="constructionDate" value={constructionDate} />
                    </label>
                </p>
                <p>
                    <label>Author
                        <input type="date" name="constructionDate" value={constructionDate} />
                    </label>
                </p>
                <p>
                    <label>Author
                        <input type="text" name="author" value={author} />
                    </label>
                </p>
                <p>
                    <label>Location
                        <input type="text" name="location" value={location} />
                    </label>
                </p>
            </form>
        </main>

    </article>
   )
}

}