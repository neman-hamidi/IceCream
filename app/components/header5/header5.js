import "./header5.css";
export default function header5() {
  return (
    <div>
      <div className="header5">
        <p className="title-header5">Event Pricing</p>
        <div className="grid-header5 text-center text-white">
          <div>
            <p className="p-border w-50 mx-auto" style={{ fontFamily:"Edu" }}>Premium</p>
            <p className="p-color-header5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit Vero,
              placeat
            </p>
            <p className="d-inline"> per Event/ </p>
            <p className="fs-3 py-3 d-inline" style={{ fontFamily:"Edu" }}>$56</p>
            <p className="p-color-header5">
              Decoration Wedding Cakes Waiter Service Flower Decoration
            </p>
            <div>
              <button className="btn btn-outline-light">Choose</button>
            </div>
          </div>
          <div className="border-mid"></div>
          <div>
            <div>
              <p className="p-border w-50 mx-auto" style={{ fontFamily:"Edu" }}>Standard</p>
              <p className="p-color-header5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit Vero,
                placeat
              </p>
              <p className="d-inline"> per Event/ </p>
              <p className="fs-3 py-3 d-inline" style={{ fontFamily:"Edu" }}>$29</p>
              <p className="p-color-header5">
                Party Decoration Design Cake Home Delivery Ballon Decoration
              </p>
              <button className="btn btn-outline-light">Choose</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
