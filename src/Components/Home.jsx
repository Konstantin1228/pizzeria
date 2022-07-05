import ContentCatalogDinamick from "./Catalogs/ContentCatalogDinamick";
import ContentCatalogStatic from "./Catalogs/ContentCatalogStatic";
function Home() {
  return (
    <div className="content">
      <ContentCatalogDinamick title={"Пицца"} key={0} />
      {/* <ContentCatalogStatic title={"Закуски"} /> */}
    </div>
  );
}

export default Home;
