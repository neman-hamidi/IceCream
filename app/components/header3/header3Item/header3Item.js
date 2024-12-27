import "./header3Item.css"
export default function header3Item({ title, desc, children }) {
  return (
    <div>
        <div className="text-center text-white">
            {children}
            <p className="py-2 fw-bold fs-4">{title}</p>
            <p>{desc}</p>
        </div>
    </div>
  )
}
