import "./header7.css";
const Header7 = () => (
  <header className="header7">
    <div className="header7-title">
      <h3
        className="fs-3 text-white mb-3 fw-bold"
        style={{ fontFamily: "Edu" }}
      >
        Place Your Order
      </h3>
      <p className="text-center text-secondary mb-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
      </p>
    </div>
    <div className="div-message">
      <div>
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-center w-100"
        >
          Last Name
        </label>
        <input
          type="text"
          className="form-control mb-4"
          id="exampleFormControlInput1"
          placeholder="Pleas Enter Last Name"
        />
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-center w-100"
        >
          Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Your Subject"
        />
      </div>
      <div>
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-center w-100"
        >
          First Name
        </label>
        <input
          type="text"
          className="form-control mb-4"
          id="exampleFormControlInput1"
          placeholder="Pleas Enter First Name"
        />
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-center w-100"
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
    </div>
    <div className="form-group w-25 ms-auto text-area-form">
      <label htmlFor="exampleFormControlTextarea1">Your Message</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div className="form-control-btn">
      <button className="btn btn-outline-light">Submit</button>
    </div>
  </header>
);
export default Header7;
