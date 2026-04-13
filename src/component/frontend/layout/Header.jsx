import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header className="container py-3">
        <div className="row justify-content-center">
          <div className="col-8">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  首頁
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  訪談紀錄
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/health_check_result" className="nav-link">
                  檢驗檢查紀錄
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  健康促進活動
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  衛教資訊
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-primary text-nowrap">
              登出
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
