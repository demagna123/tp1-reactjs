import './Bouton.css'
type boutonProps = {
  label: string;
  disabled: boolean

}
export default function Bouton({
    label, disabled,
}: boutonProps) {
  return (
    <div className="btn-component">

        <button disabled={disabled} type="submit">{label}</button>
    </div>
  )
}
