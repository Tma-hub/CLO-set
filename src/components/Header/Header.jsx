import './Header.css';

export const Header = () => {
  return (
    <section className="main__header">
      <div className="content_wrapper">
        <div className="back">
          <button>
            <img src="/img/zpet.png" alt="zpet" width="24" height="24" />
          </button>
        </div>
        <div className="button_wrapper">
          <div className="home">
            <button>
              <img src="/img/home.png" alt="domu" width="24" height="24" />
            </button>
          </div>
          <div className="user">
            <button>
              <img src="/img/user.png" alt="uzivatel" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
