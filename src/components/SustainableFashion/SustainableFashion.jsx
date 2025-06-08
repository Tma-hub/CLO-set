import './SustainableFashion.css';

export const SustainableFashion = () => {
  return (
    <div>
      <div className="container_sus">
        <img src="/img/sustainable_fashion.png" alt="Udržitená móda" />
      </div>
      <div className="capsule__closet">
        <div className="sustainable_fashion_img">
          <img src="/img/slow_fashion.png" alt="Udržitená móda" />
        </div>
        <div className="capsule__closet__info">
          <h1>Capsule closet</h1>
          <p>
            “Capsule” šatník je minimalistický přístup k oblékání, který klade
            důraz na kvalitu, nadčasovost a snadnou kombinovatelnost. Základem
            je menší počet pečlivě vybraných kousků oblečení, které spolu
            navzájem ladí a dají se snadno kombinovat do různých outfitů.
            Typicky obsahuje neutrální barvy, jednoduché střihy a oblíbené
            klasiky - jako džíny, košile, sako nebo kvalitní trička. Capsule
            šatník pomáhá šetřit čas, prostor i peníze a zároveň podporuje
            udržitelnější způsob života.
          </p>
        </div>
      </div>
      <div className="cost__per__wear">
        <div className="sustainable_fashion_img">
          <img src="/img/cost_per_wear.png" alt="Cost per wear" />
        </div>
        <div className="cost__per__wear__info">
          <h1>Cost per wear</h1>
          <p>
            {' '}
            S konceptem capsule šatníku úzce souvisí i princip Cost Per Wear,
            tedy cena za jedno nošení. Jde o jednoduchý, ale efektivní způsob,
            jak zhodnotit, zda má daný kus oblečení ve vašem šatníku opravdu
            smysl. Nejde jen o to, kolik stál, ale o to, jak často ho skutečně
            oblékáte. Kvalitní a nadčasové kousky, které nosíte opakovaně, mají
            ve výsledku mnohem "nižší" cenu než levné věci, které zůstávají
            ležet ve skříni. Přemýšlení v pojmech CPW podporuje uvědomělejší
            přístup k módě a klade důraz na využitelnost, praktičnost a
            udržitelnost místo kvantity a rychlé spotřeby.
          </p>
        </div>
      </div>

      <div className="materials">
        <div className="sustainable_fashion_img">
          <img src="/img/materialy.png" alt="Materiály" />
        </div>
        <div className="materials_info">
          <h1>Výběr materiálu</h1>
          <p>
            Důležitou součástí uvědomělého přístupu k oblékání je i výběr
            materiálu. Při výběru je dobré hledat přírodní, obnovitelné nebo
            recyklované materiály, které mají menší ekologickou stopu. Mezi
            udržitelnější volby patří například organická bavlna, len, konopí,
            nebo TENCEL™ (lyocell) materiál vyrobený z dřevité celulózy s
            šetrným zpracováním. Nicméně rozhodující není jen materiál samotný,
            ale i to, jak s oblečením zacházíme. Péče, skladování a způsob praní
            hrají v jeho životnosti ale i dopadu na životní prostředí zásadní
            roli.
          </p>
        </div>
      </div>
    </div>
  );
};
