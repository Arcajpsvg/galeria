import { Component } from 'react';
import './PrivateArchiList.css';
export default class PrivateArchiList extends Component {

    //este componente muestra la lista de arquitectura de una manera simplificada para su manipulación por usuarios registrados.
    //el state sólo consiste en un array creado a partir de la propia lista de arquitectura situada en localStorage.
    //incluye también dos booleans para manejar el re-renderizado de la lista al editarse o crearse elementos.
    constructor(props) {
        super(props);
        this.state = ({ localArreglo: JSON.parse(localStorage.getItem('listArchi')) ? Array.from(JSON.parse(localStorage.getItem('listArchi'))) : [], finishedEditing: this.props.finishedEditing, finishedPosting: this.props.finishedPosting })
    }

    //este ciclo de vida re-renderiza el componente al cambiar esos dos booleans de valor en el componente padre.
    componentDidUpdate(){
       if((this.props.finishedEditing !== this.state.finishedEditing) || (this.props.finishedPosting !== this.state.finishedPosting)){
        this.setState({ localArreglo: JSON.parse(localStorage.getItem('listArchi')) ? Array.from(JSON.parse(localStorage.getItem('listArchi'))) : [], finishedEditing: this.props.finishedEditing, finishedPosting: this.props.finishedPosting })
        
       }
    }
        

    //esta es la función para borrar elementos, la de editar se pasa como prop desde el componente padre.
    //Edita el estado mediante setState igualando el array de edificios a su equivalente después de haber quitado mediante filter
    //al elemento que se quiso borrar (identificado por su id) y de haber modificado todos los ids de cada otro elemento a su posición
    //en el array, puesto que la creación de edificios depende del length del array para asignar ids nuevos.
    //Despues de hacer eso y mediante una función callback para evitar problemas de asincronía, utiliza JSON.stringify para guardar la
    //nueva lista en localStorage y sustituir a la anterior.
    deleteBuilding(id) {
        let jsonArreglo = [];
        this.setState({ localArreglo: this.state.localArreglo.filter((element) => element.id !== id).map((element, index) => { element.id = index; return element }), finishedEditing: this.state.finishedEditing, finishedPosting: this.state.finishedPosting },
            () => {
                jsonArreglo = JSON.stringify(this.state.localArreglo);
                localStorage.setItem('listArchi', jsonArreglo);
            }
        );
    }

    //lo único resaltable en el render es que utiliza la función 'editBuilding' recibida de props para manejar
    // los clicks sobre el botón edit.
    render() {
        return (
            <>
                <table id="private-archi-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                        {this.state.localArreglo.map(building =>
                            <tr key={building.id}>
                                <td>{building.id}</td>
                                <td>{building.name}</td>
                                <td><div className="action-control"><button onClick={() => this.props.editBuilding(building.id)}>Edit</button><button onClick={() => this.deleteBuilding(building.id)}>Delete</button></div></td>
                            </tr>
                        )}
                    </tbody>
                </table></>
        )
    }
}