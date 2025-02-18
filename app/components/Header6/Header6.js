import "./header6.css";
import StarRateIcon from "@mui/icons-material/StarRate";
const Header6 = () => {
  const items = Array.from({ length: 5 });
  return (
    <header className="header6">
      <div className="p-4 comment-div">
        <p className="text-center text-secondary">
          Edit button to change this text. Lorem dolor sit amet, sit consectetur
          elit. amet, for adipiscing elit. amet, consect adipiscing elit.
        </p>
        <p className="text-center text-secondary py-3 fs-">dec 2020</p>
        <div className="text-center">
          {items.map((_, index) => (
            <StarRateIcon key={index} />
          ))}
        </div>
        <div className="comment-user text-center text-white">
          <img src="/img/profile-img.png" alt="img" />
          <h3 className="fw-bold mb-2">Michel Lora</h3>
          <h4>- Web Designer -</h4>
        </div>
      </div>
    </header>
  );
};
export default Header6;
