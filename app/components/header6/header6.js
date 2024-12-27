import "./header6.css";
import StarRateIcon from '@mui/icons-material/StarRate';
export default function header6() {
  return (
    <div>
      <div className="header6">
        <div className="p-4 comment-div">
          <p className="text-center text-secondary">
            Edit button to change this text. Lorem dolor sit amet, sit
            consectetur elit. amet, for adipiscing elit. amet, consect
            adipiscing elit.
          </p>
          <p className="text-center text-secondary py-3 fs-">dec 2020</p>
          <div className="text-center">
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
            <StarRateIcon/>
          </div>
          <div className="comment-user text-center text-white">
            <img src="/img/profile-img.png" alt="" />
            <p className="fw-bold mb-2">Michel Lora</p>
            <p>- Web Designer -</p>
          </div>
        </div>
      </div>
    </div>
  );
}
