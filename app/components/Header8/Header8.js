import "./header8.css";
import icons from "./Text";
const Header8 = () => (
  <div className="header8">
    <div className="div-header8">
      <h3 className="fw-bold mb-3 fw-bold fs-2" style={{ fontFamily: "Edu" }}>
        MoonRight
      </h3>
      <h3 className="mb-3 ">123 stree New York City</h3>
      <h3 className="mb-1">Office Telephone: 0000000000</h3>
      <h3 className="mb-3">Mobile: 0000000000</h3>
      <h3>Email: admin@gmail.com</h3>
      <h3 className="pt-2">Mon-Fri: 9am to 6pm</h3>
      <div className="div-grid-header8">
        {icons.map((item) => (
          <div key={item.id}>{item.component}</div>
        ))}
      </div>
    </div>
  </div>
);
export default Header8;
