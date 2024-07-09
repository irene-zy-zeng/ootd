import "./TextInput.scss";

const TextInput = ({ name, label, value, onChange, error,placeholder }) => {
  return (
    <div className="text-input">
      <label htmlFor={name} className="label-text input__label">{label}</label>
      <input type="text" name={name} id={name} className={`text-input__input body-medium ${error ? "text-input__input--error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
