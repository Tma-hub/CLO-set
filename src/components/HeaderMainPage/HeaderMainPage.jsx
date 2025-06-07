import './HeaderMainPage.css';

export const HeaderMainPage = () => {
  return (
    <section className="main__header">
      <section class="header">
        <div class="about_app">
          <a href="about.html">
            <button>
              <h2>O aplikaci</h2>
            </button>
          </a>
        </div>
        <div class="user">
          <a href="user.html">
            <button>
              <img src="/img/user.png" alt="uzivatel" width="24" height="24" />
            </button>
          </a>
        </div>
        <div class="menu">
          <button>hamburger</button>
        </div>
      </section>
    </section>
  );
};
