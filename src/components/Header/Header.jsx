import './header.css';

export const Header = () => {
  return (
    <section className="main__header">
      <div className="content_wrapper">
        <div className="back">
          <a href="main.html">
            <button>
              <img src="/img/zpet.png" alt="zpet" width="24" height="24" />
            </button>
          </a>
        </div>
        <div className="button_wrapper">
          <div className="home">
            <a href="main.html">
              <button>
                <img src="/img/home.png" alt="domu" width="24" height="24" />
              </button>
            </a>
          </div>
          <div className="user">
            <a href="index.html">
              <button>
                <img
                  src="/img/user.png"
                  alt="uzivatel"
                  width="24"
                  height="24"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
