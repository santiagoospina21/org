import { useState } from "react";

import FieldText from "../fieldText/fieldText.component";
import OptionList from "../optionList/optionList.component";
import Button from "../button/button.component";

import "./form.styles.css";

const Form = ({ equipos, registerMember, createTeam }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const handlerEnvio = (e) => {
    e.preventDefault();
    let dataForm = {
      name: name,
      position: position,
      photo: photo,
      team: team,
    };
    registerMember(dataForm);
  };

  const handlerNewTeam = (e) => {
    e.preventDefault();
    createTeam({ titulo: title, colorSecundario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={handlerEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <FieldText
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={name}
          setValor={setName}
        />
        <FieldText
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={position}
          setValor={setPosition}
        />
        <FieldText
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={photo}
          setValor={setPhoto}
        />
        <OptionList valor={team} setValor={setTeam} equipos={equipos} />
        <Button texto="Crear" />
      </form>

      <form onSubmit={handlerNewTeam}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <FieldText
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={title}
          setValor={setTitle}
        />
        <FieldText
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />

        <Button texto="Registrar equipo" />
      </form>
    </section>
  );
};

export default Form;
