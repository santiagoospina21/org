import "./optionList.styles.css";

const OptionList = ({ valor, setValor, equipos }) => {
  const handlerChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={valor} onChange={handlerChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default OptionList;
