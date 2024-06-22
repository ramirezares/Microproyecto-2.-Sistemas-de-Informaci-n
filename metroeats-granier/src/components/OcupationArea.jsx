import React, { useState } from 'react';
import Dropdown from './Dropdown';

const OcupationArea = () => {
  const [ocupacion, setOcupacion] = useState('');
  const [departamentoCarrera, setDepartamentoCarrera] = useState('');

  const ocupaciones = [
    { value: 'Estudiante', label: 'Estudiante', departamentoCarrera: ['Software', 'Civil', 'Mecánico'] },
    { value: 'Doctor', label: 'Doctor', Carrera: ['Medicina General', 'Pediatría', 'Cardiología'] },
    // Agrega más opciones de ocupación con sus respectivos departamentos/carreras
  ];

  const handleOcupacionChange = (event) => {
    setOcupacion(event.target.value);
    const selectedOcupacion = ocupaciones.find((ocupacion) => ocupacion.value === event.target.value);
    setDepartamentoCarrera(selectedOcupacion.departamentoCarrera || []);
  };

  return (
    <div>
      <Dropdown
        options={ocupaciones}
        value={ocupacion}
        onChange={handleOcupacionChange}
        label="Ocupación"
      />
      <Dropdown
        options={departamentoCarrera.map((dc) => ({ value: dc, label: dc }))}
        value={departamentoCarrera}
        onChange={(event) => setDepartamentoCarrera(event.target.value)}
        label="Departamento/Carrera"
      />
    </div>
  );
};

export default OcupationArea;