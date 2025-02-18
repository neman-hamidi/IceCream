import "./nav.css";
import Ps from "./Text";
export default function nav() {
  return (
    <nav className="w-100 nav">
      <div className="grid-div p-3">
        <div>
          <div className="d-md-none">
            <h2>Home</h2>
          </div>
          <div className="div-title-nav d-none d-md-flex">
            {Ps.map((item, index) => (
              <p key={index} className={`${item.className || ""}`}>
                {item.Name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <img src="/img/logo-dark.png" alt="" />
        </div>
      </div>
      <div className="img-navbar-rounded"></div>
    </nav>
  );
}
