import './Bouton.css'
type boutonProps = {
  label: string;

}
export default function Bouton({
    label
}: boutonProps) {
  return (
    <div className="btn-component">

        <button type="submit">{label}</button>
    </div>
  )
}
