import "./header2.css";
export default function header2() {
  return (
    <div className="header2">
      <div className="text-white text-start ">
        <div className="header-title">
          <p style={{ fontFamily:"Edu" }}>45+ Year Of Experience</p>
          <p className="fs-2" style={{ fontFamily:"Edu" }}>Our Speciality</p>
        </div>

        <div className="header-2-progressbar ms-5 me-auto">
          <div>
            <div>
              <div className="progress-circle">
                <div className="progress-circle-fill"></div>
                <span className="progress-text">75%</span>
              </div>
              <p className="text-center pt-4">Macrons</p>
            </div>
          </div>
          <div>
            <div>
              <div className="progress-circle">
                <div className="progress-circle-fill2"></div>
                <span className="progress-text">45%</span>
              </div>
              <p className="text-center pt-4">Chocolate Fudge Cake</p>
            </div>
          </div>
          <div>
            <div>
              <div className="progress-circle">
                <div className="progress-circle-fill3"></div>
                <span className="progress-text">95%</span>
              </div>
              <p className="text-center pt-4">Wedding Cakes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
