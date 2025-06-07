import './AppLogo.css';

export const AppLogo = () => {
  return (
    <div>
      <section className="opening__page">
        <a href="main.html">
          <button class="opening">
            <img src="/img/app_logo.png" alt="app_logo" width="200" />
          </button>
        </a>
      </section>
    </div>
  );
};
