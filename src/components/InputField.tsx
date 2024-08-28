import "./InputField.css";

interface InputFieldProps {
  label: string;
  value: number | undefined;
  onChange: (value: number) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        className="input"
        required
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};
