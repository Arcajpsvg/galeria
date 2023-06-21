import { Component } from "react";

export default class ArchiForm extends Component{

constructor(props){
    super(props);
    this.state = {values: {name: '', description: '', constructionYear: '', author: '', location: ''}, 
    validations: {name: '', description: '', constructionYear: '', author: '', location: ''}};
}

handleChange = (e) => {
    const {name, value} = e.target;
    this.setState(
        {
            values:{
                ...this.state.values,                   
                [name]:value
            }
        }
    );
}





render(){
   let {name, description, constructionYear, author, location} = this.state;

   return(
    <article>
        <header>
            <h1>Architecture form</h1>
        </header>
        <main>
            <form>
                <p>
                    <label>Name
                        <input type="text" name="name" value={name} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>Description
                        <textarea name="description" value={description} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>Date of construction
                        <input type="date" name="constructionYear
                " value={constructionYear
                } onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>Author
                        <input type="number" name="constructionYear" value={constructionYear} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>Author
                        <input type="text" name="author" value={author} onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label>Location
                        <input type="text" name="location" value={location} onChange={this.handleChange}/>
                    </label>
                </p>
                <button type="submit">Enviar</button>
            </form>
            <pre>
                    {JSON.stringify(this.state.values)}
                </pre>
        </main>

    </article>
   )
}

}