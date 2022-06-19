import React from 'react';

const Form = ({newSpacecraft, setNewSpacecraft}) => {

  const handleChange = e => {
    setNewSpacecraft({
      ...newSpacecraft,
      [e.target.name]: e.target.value
    })
  }

  let { name, type, activity, origin, tripulation, combustible, state, weight } = newSpacecraft

  const handleSubmit = () => {
    tripulation = parseInt(tripulation, 10);
    //validate the data
    if(name === '' || type === '' || activity === '' || origin === '' || tripulation < 0 || combustible === '' || state === '' || weight ==='' ) {
      alert('Todos los campos son oblogatorios')
      return
    }

    //query
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newSpacecraft)
    }
    fetch('http://localhost:8080/api/v1/spacecraft', requestInit)
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



  }

  return (
    <form onSubmit={handleSubmit} className="row m-1">
      <div className="col-4 m-1">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input value={name} name="name" onChange={handleChange} type="text" id="name" className="form-control"/>
      </div>
      <div className="col-4 m-1">
        <label htmlFor="type" className="form-label">Tipo de nave</label>
        <input value={type} name="type" onChange={handleChange} type="text" id="type" className="form-control"/>
      </div>
      <div className="col-3 m-1">
        <label htmlFor="activity" className="form-label">Actividad</label>
        <input value={activity} name="activity" onChange={handleChange} type="text" id="activity" className="form-control"/>
      </div>
      <div className="col-3 m-1">
        <label htmlFor="origin" className="form-label">Origen</label>
        <input value={origin} name="origin" onChange={handleChange} type="text" id="origin" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="tripulation" className="form-label">Tripulacion</label>
        <input value={tripulation} name="tripulation" onChange={handleChange} type="number" id="tripulation" className="form-control"/>
      </div>
      <div className="col-4 m-1">
        <label htmlFor="combustible" className="form-label">Combustible</label>
        <input value={combustible} name="combustible" onChange={handleChange} type="text" id="combustible" className="form-control"/>
      </div>
      <div className="col-3 m-1">
        <label htmlFor="state" className="form-label">Estado</label>
        <input value={state} name="state" onChange={handleChange} type="text" id="state" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="weight" className="form-label">Peso</label>
        <input value={weight} name="weight" onChange={handleChange} type="text" id="weight" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="burden" className="form-label">Carga</label>
        <input  name="burden" onChange={handleChange} type="text" id="burden" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="thrust" className="form-label">Empuje</label>
        <input  name="thrust" onChange={handleChange} type="text" id="thrust" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="height" className="form-label">Altura</label>
        <input  name="height" onChange={handleChange} type="text" id="height" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="power" className="form-label">Potencia</label>
        <input  name="power" onChange={handleChange} type="text" id="power" className="form-control"/>
      </div>
      <div className="col-3 m-1">
        <label htmlFor="objectOfStudy" className="form-label">Objeto de estudio</label>
        <input  name="objectOfStudy" onChange={handleChange} type="text" id="objectOfStudy" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="inOrbit" className="form-label">En orbita</label>
        <input  name="inOrbit" onChange={handleChange} type="text" id="inOrbit" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="speed" className="form-label">Velocidad</label>
        <input  name="speed" onChange={handleChange} type="text" id="speed" className="form-control"/>
      </div>
      <div className="col-2 m-1">
        <label htmlFor="mission" className="form-label">Tipo de Mision</label>
        <input  name="mission" onChange={handleChange} type="text" id="mission" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
   );
}

export default Form;
