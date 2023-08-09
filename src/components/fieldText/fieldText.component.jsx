import "./fieldText.styles.css";

const FieldText = ({
  titulo,
  placeholder,
  required,
  valor,
  setValor,
  type = "text",
}) => {
  const onChangeHandler = (e) => {
    setValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={onChangeHandler}
        type={type}
      />
    </div>
  );
};

export default FieldText;
