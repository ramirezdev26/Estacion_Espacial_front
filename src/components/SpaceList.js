import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SpaceList = ({search, setSpacecrafts, setSearch, tableSpacecrafts, spacecrafts, setListUpdated, newSpacecraft, setNewSpacecraft}) => {

  const handleChange=e=>{
    setSearch(e.target.value);
    filter(e.target.value);
  }

  const filter = (wordSearch) => {
    console.log(tableSpacecrafts);
    var resultSearch = tableSpacecrafts.filter((element) => {
      if(element.name.toString().toLowerCase().includes(wordSearch.toLowerCase()) ||
         element.type.toString().toLowerCase().includes(wordSearch.toLowerCase()) ||
         element.activity.toString().toLowerCase().includes(wordSearch.toLowerCase()) ||
         element.origin.toString().toLowerCase().includes(wordSearch.toLowerCase()) ||
         element.combustible.toString().toLowerCase().includes(wordSearch.toLowerCase()) ||
         element.state.toString().toLowerCase().includes(wordSearch.toLowerCase()) ||
         element.weight.toString().toLowerCase().includes(wordSearch.toLowerCase()) ) {
        return element;
      } else {
        return console.log('word not found');
      }
    });
    setSpacecrafts(resultSearch);
  }


  const handleDelete = id => {
    const requestInit = {
      method: 'DELETE'
    }
    fetch('http://localhost:8080/api/v1/spacecraft/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

    setListUpdated(true)
  }

  let { name, type, activity, origin, tripulation, combustible, state, weight } = newSpacecraft

  const handleUpdate = id => {
    tripulation = parseInt(tripulation, 10);
    //validate the data
    if(name === '' || type === '' || activity === '' || origin === '' || tripulation < 0 || combustible === '' || state === '' || weight ==='' ) {
      alert('Todos los campos son oblogatorios')
      return
    }

    //query
    const requestInit = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newSpacecraft)
    }
    fetch('http://localhost:8080/api/v1/spacecraft/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

    // restarting newSpacecraftState
    setNewSpacecraft({
      name: ' ',
      type: ' ',
      activity: ' ',
      origin: ' ',
      tripulation: 0,
      combustible: ' ',
      state: ' ',
      weight: ' ',
      burden: ' ',
      thrust: ' ',
      height: ' ',
      power: ' ',
      objectOfStudy: ' ',
      inOrbit: ' ',
      speed: ' ',
      mission: ' '
    })

    setListUpdated(true)
  }

  return (
  <div>
    <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={search}
          placeholder="Busqueda por caracteristicas de la nave"
          onChange={handleChange}
        />
        <button className="btn btn-succes">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    <table className="table table-sm table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Tipo de nave</th>
          <th>Actividad</th>
          <th>Origen</th>
          <th>Tripulacion</th>
          <th>Combustible</th>
          <th>Estado</th>
          <th>Peso</th>
          <th>Carga</th>
          <th>Empuje</th>
          <th>Altura</th>
          <th>Potencia</th>
          <th>Objeto de estudio</th>
          <th>Orbita terrestre?</th>
          <th>Velocidad</th>
          <th>Tipo de Mision</th>
        </tr>
      </thead>
      <tbody>
        {spacecrafts.map((spacecrafts) => (
          <tr key={spacecrafts._id}>
            <td>{spacecrafts._id}</td>
            <td>{spacecrafts.name}</td>
            <td>{spacecrafts.type}</td>
            <td>{spacecrafts.activity}</td>
            <td>{spacecrafts.origin}</td>
            <td>{spacecrafts.tripulation}</td>
            <td>{spacecrafts.combustible}</td>
            <td>{spacecrafts.state}</td>
            <td>{spacecrafts.weight}</td>
            <td>{spacecrafts.burden}</td>
            <td>{spacecrafts.thrust}</td>
            <td>{spacecrafts.height}</td>
            <td>{spacecrafts.power}</td>
            <td>{spacecrafts.objectOfStudy}</td>
            <td>{spacecrafts.inOrbit}</td>
            <td>{spacecrafts.speed}</td>
            <td>{spacecrafts.mission}</td>
            <td>
              <div className="mb-3">
                <button onClick={() => handleDelete(spacecrafts._id)} className="btn btn-danger">Delete</button>
              </div>
              <div className="mb-3">
                <button onClick={() => handleUpdate(spacecrafts._id)} className="btn btn-success">Update</button>
              </div>
            </td>

        </tr>
        ))}
      </tbody>
    </table>
    </div>
   );
}

export default SpaceList;
