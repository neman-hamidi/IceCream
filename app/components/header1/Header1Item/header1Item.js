import "./header1Item.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Header1Item = ({ title, desc, children })  =>  (
    <header className="mb-3">
      <div className="rounded-4 p-4 header1Item justify-items-end text-white">
        <div className="bg-icon-header-1" style={{ fontFamily: "Edu" }}>
          {children}
        </div>
        <h3 className="pt-2 fw-bold fs-3" style={{ fontFamily: "Edu" }}>
          {title}
        </h3>
        <h3 className="py-3 p-desc">{desc}</h3>
        <div className="justify-items-start w-100">
          <ArrowForwardIcon />
        </div>
      </div>
    </header>
)
export default Header1Item