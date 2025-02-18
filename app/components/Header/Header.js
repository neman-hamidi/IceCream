import "./header.css";
const Header = () => (
  <header>
    <div className="header">
      <div>
        <h3 className="fs-1 text-white fw-bold p1-header">Ice Cream</h3>
        <h3 className="fs-1 text-white fw-bold p2-header">Cakes</h3>
        <p className="w-75 text-white lh-lg ms-0 me-auto p3-header">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          distinctio, doloremque, suscipit atque <br /> fugit at ducimus ad
          voluptates, eligendi expedita amet consequuntur. Commodi vel impedit
          dolore minus consequatur quas magni!
        </p>
        <button className="btn btn-outline-dark mt-5 btn-header">
          Learn More
        </button>
      </div>
    </div>
  </header>
);
export default Header;
