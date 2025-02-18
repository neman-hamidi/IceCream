import "./header3Item.css";
const Header3Item = ({ title, desc, icon }) => (
  <div className="text-center text-white">
    {icon}
    <h3 className="py-2 fw-bold fs-4">{title}</h3>
    <p>{desc}</p>
  </div>
);
export default Header3Item;
