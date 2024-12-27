import "./header3.css";
import Header3Item from "./header3Item/header3Item";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
export default function header3() {
  return (
    <div className="header3">
      <div className="header3-grid">
        <div className="header3-grid1">
          <div>
            <Header3Item title="35M" desc="Events">
              <StarBorderPurple500OutlinedIcon className="header3-icons" />
            </Header3Item>
          </div>
          <div>
            <Header3Item title="70K" desc="Happy Clients">
              <SentimentVerySatisfiedOutlinedIcon className="header3-icons" />
            </Header3Item>
          </div>
          <div>
            <Header3Item title="81K" desc="Birthday Party">
              <AutoAwesomeOutlinedIcon className="header3-icons" />
            </Header3Item>
          </div>
        </div>
        <div className="header3-grid2">
          <div>
            <Header3Item title="56K" desc="Custom Cakes">
              <CakeOutlinedIcon className="header3-icons" />
            </Header3Item>
          </div>
          <div>
            <Header3Item title="676K" desc="Wedding">
              <LocalFireDepartmentOutlinedIcon className="header3-icons" />
            </Header3Item>
          </div>
        </div>
      </div>
    </div>
  );
}
