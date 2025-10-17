
import './Input.css';

type InputProps = {
  reference: string;
  label: string;
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string

};
export default function Input({
  reference,
  label,
  type,
  placeholder,
  onChange,
  value,
  
}: InputProps) {
  return (
    <div className='container'>
      <label htmlFor={reference}>{label}</label>
      <input
        type={type}
        id={reference}
        name={reference}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
