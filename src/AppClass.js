import React from 'react';

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'Pedro',
            apellido: 'Perez',
            edad: 10,
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 bg-info">
                        <h1>Class Component {this.props.name}</h1>
                        <p>{this.state.nombre} {this.state.apellido}</p>

                        <button className="btn btn-danger" onClick={() => {
                            this.setState({
                                nombre: 'Sergio',
                                apellido: 'Fernandez'
                            })
                        }}>
                            Cambiar Nombre y Apellido
                        </button>

                        <input type="text" onChange={(evento) => this.setState({ nombre: evento.target.value })} placeholder="Ingrese Nombre"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppClass;