import React, { useState } from 'react';

function AppFunc(props) {
    const [state, setState] = useState({
        nombre: 'Pedro',
        apellido: 'Perez',
        edad: 10,
    })

    const [estudiantes, setEstudiantes] = useState([]);

    const [nombre, setNombre] = useState("Andres");

    const [apellido, setApellido] = useState('');

    const [show, setShow] = useState(props.mostrar);

    function cambiarNombre(nombre) {
        setNombre(nombre);
    }

    const cambiosDatos = evento => {
        const { name, value } = evento.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const agregarEstudiantes = estudiante => {
        let newEstudiantes = estudiantes.concat(estudiante);
        setEstudiantes(newEstudiantes);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 bg-info">
                    <h1>Function Component {props.name}</h1>
                    <p>{state.nombre} {state.apellido}</p>

                    <button className="btn btn-danger" onClick={() => {
                        setState({
                            ...state,
                            nombre: 'Sergio',
                            apellido: 'Fernandez'
                        })
                    }}>
                        Cambiar Nombre y Apellido
                    </button>
                    <h1>{nombre}</h1>
                    <button onClick={() => cambiarNombre('Paul')} className="btn btn-warning">
                        Cambiar Nombre
                    </button>

                    <button onClick={(evento) => {
                        console.log(evento.target.innerHTML)
                        cambiarNombre('Paul');
                    }} className="btn btn-warning">
                        Cambiar Nombre 2f
                    </button>

                    <h3>{apellido}</h3>
                    <input type="text" onChange={(evento) => setApellido(evento.target.value)} placeholder="Ingrese Apellido" />

                    {
                        !show && (
                            <h1>Debes Seleccionar Una Opcion</h1>
                        )
                    }

                    {show ? (
                        <h3>Monstrando Valor</h3>
                    ) : (
                        <h3>Ocultando Valor</h3>
                    )}

                    <button onClick={() => setShow(!show)} className={"btn " + (show ? 'btn-danger' : 'btn-success')}>
                        {show ? 'Ocultar' : 'Mostrar'}
                    </button>


                    <form>

                        {/* <input type="text" name="nombre" placeholder="Ingrese nombre" onChange={(evento) => setState({ ...state, nombre: evento.target.value}) } />
                        <input type="text" name="apellido" placeholder="Ingrese Apellido" onChange={(evento) => setState({ ...state, apellido: evento.target.value}) } />
                        <input type="text" name="edad" placeholder="Ingrese Edad" onChange={(evento) => setState({ ...state, edad: parseInt(evento.target.value)}) }/> */}
                        <input type="text" name="nombre" placeholder="Ingrese nombre" onChange={(evento) => cambiosDatos(evento)} />
                        <input type="text" name="apellido" placeholder="Ingrese Apellido" onChange={cambiosDatos} /> {/* Aqui recibe el evento como argumento por default en mi funcion */}
                        <input type="text" name="edad" placeholder="Ingrese Edad" onChange={(evento) => cambiosDatos(evento)} />
                    </form>

                    <button onClick={() => agregarEstudiantes({ name: 'Estudiante ' + (estudiantes.length + 1) })}>
                        Agregar Estudiante
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppFunc;