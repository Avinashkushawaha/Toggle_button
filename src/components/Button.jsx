export default function Button({title,color, onClick}) {
    return (
        <button onClick={onClick}className="shadow p-1 pl-3 pr-3 rounded-2xl text-xs" style={{color: color}}>{title}</button>
    )
    }