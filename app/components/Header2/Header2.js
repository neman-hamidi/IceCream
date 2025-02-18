import "./header2.css";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
import CircelPercent from "./Text";
const Header2 = () => (
  <article className="header2">
    <div className="text-white text-start ">
      <div className="header-title">
        <h3 style={{ fontFamily: "Edu" }}>45+ Year Of Experience</h3>
        <h3 className="fs-2" style={{ fontFamily: "Edu" }}>
          Our Speciality
        </h3>
      </div>
      <div className="header-2-progressbar ms-5 me-auto">
        {CircelPercent.map((item, index) => (
          <ProgressCircle key={index} {...item} />
        ))}
      </div>
    </div>
  </article>
);
export default Header2;
