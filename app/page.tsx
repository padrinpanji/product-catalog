import { DataInterface, getData } from "./helper/data.helper";

import styles from "./styles/page.module.scss";
import GalleryComponent from "./components/gallery.component";
import VariantComponent from "./components/variant.component";
import ContentComponent from "./components/content.component";

export default async function Home() {
  const products = await getData();

  return (
    <main className={styles["product"]}>
      <h2>Product Catalogue</h2>

      <div className={styles["product__list"]}>
        {products.map(({ id, description, title, medias, variants, price }) => {
          return (
            <div key={id} className={styles["product__card"]}>
              <GalleryComponent medias={medias} />
              <VariantComponent variants={variants} />
              <ContentComponent
                title={title}
                description={description}
                price={price}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
