export const About = () => {
  return (
    <div>
      <section className="about">
        <h1>O aplikaci</h1>
        <p>
          Aplikace CLO je navržena s cílem usnadnit každodenní rozhodování při
          výběru oblečení s důrazem na funkčnost, estetiku a udržitelnost.
          Využívá algoritmus, který na základě několika klíčových parametrů jako
          je kombinace barev, aktuální sezóna nebo počasí a typ události
          vygeneruje doporučení kompletních oděvních setů z vašeho šatníku. Díky
          tomu dokáže optimalizovat využití stávajících kousků a přinést nové
          kombinace, které jste dosud třeba nevyzkoušeli.
        </p>
      </section>
      <section className="how__it__works">
        <h1>Jak aplikace funguje?</h1>
        <p>
          Nahraj kousky ze svého šatníku do aplikace. Stačí v sekci “Přidej nový
          kousek do svého šatníku” zadat základní informace o daném oděvu a
          uložit. Pak už jen klikni na tlačítko “Co dnes na sebe” a aplikace ti
          pomůže najít tvůj vysněný outfit. Nebo můžeš zvolit náhodně vybraný
          kousek, stejně jako některý ze sekce “Oblíbené”. Svoje outfity pak
          můžeš sdílet na svých oblíbených platformách. Pro podrobnější
          informace můžete navštívit doprovodnou stránku k aplikaci{' '}
          <a href="https://tma-hub.github.io/CLO/">zde</a>.
        </p>
      </section>
    </div>
  );
};
