import "./header5.css";
const Header5 = () => (
  <header className="header5">
    <h3 className="title-header5">Event Pricing</h3>
    <div className="grid-header5 text-center text-white">
      <div>
        <h2 className="p-border w-50 mx-auto" style={{ fontFamily: "Edu" }}>
          Premium
        </h2>
        <p className="p-color-header5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit Vero, placeat
        </p>
        <span className="d-inline"> per Event/ </span>
        <span className="fs-3 py-3 d-inline" style={{ fontFamily: "Edu" }}>
          $56
        </span>
        <p className="p-color-header5">
          Decoration Wedding Cakes Waiter Service Flower Decoration
        </p>
        <button className="btn btn-outline-light">Choose</button>
      </div>
      <div className="border-mid"></div>
      <div>
        <h2 className="p-border w-50 mx-auto" style={{ fontFamily: "Edu" }}>
          Standard
        </h2>
        <p className="p-color-header5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit Vero, placeat
        </p>
        <span className="d-inline"> per Event/ </span>
        <span className="fs-3 py-3 d-inline" style={{ fontFamily: "Edu" }}>
          $29
        </span>
        <p className="p-color-header5">
          Party Decoration Design Cake Home Delivery Ballon Decoration
        </p>
        <button className="btn btn-outline-light">Choose</button>
      </div>
    </div>
  </header>
);
export default Header5;
