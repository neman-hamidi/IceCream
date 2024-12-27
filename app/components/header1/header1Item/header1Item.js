import "./header1Item.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function header1Item({ title, desc, children }) {
  return (
    <div className="mb-3">
      <div className="rounded-4 p-4 header1Item justify-items-end text-white">
        <div className="bg-icon-header-1" style={{ fontFamily: "Edu" }}>
          {children}
        </div>
        <p className="pt-2 fw-bold fs-3" style={{ fontFamily: "Edu" }}>
          {title}
        </p>
        <p className="py-3 p-desc">{desc}</p>
        <div className="justify-items-start w-100">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
}
