import Header3Item from "./Header3Item/Header3Item";
import HeaderText from "./Text";
import "./header3.css";
const Header3 = () => (
  <header className="header3">
    <div className="header3-grid">
      <div className="header3-grid1">
        {HeaderText.slice(0, 3).map((item, index) => (
          <Header3Item
            key={index}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="header3-grid2">
        {HeaderText.slice(3).map((item, index) => (
          <Header3Item
            key={index}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  </header>
);
export default Header3;
