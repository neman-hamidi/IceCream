import "./nav.css";

export default function nav() {
  return (
    <div className="w-100 nav">
      <div className="grid-div p-3">
        <div>
         <div className="d-md-none">
          <h2>Home</h2>
         </div>
         <div className="div-title-nav d-none d-md-flex">
            <p>Order Now</p>
            <p>Reviews</p>
            <p>Pricing</p>
            <p>Gallery</p>
            <p>About</p>
            <p className="text-danger">Home</p>
          </div>
        </div>
        <div>
          <img src="/img/logo-dark.png" alt="" />
        </div>
      </div>
      <div className="img-navbar-rounded">
       
      </div>
    </div>
  );
}
