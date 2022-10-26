import React from "react";
import Title from "../../../../component/molecules/Title/Index";
import CardCategory from "../../../../component/molecules/CardCategory";

export default function Category() {
  return (
    <>
      <section className="Category">
        <div className="container">
          <Title title="Category" />
          <div className="Category-item row">
            <CardCategory
              title="Photography"
              img="https://i.postimg.cc/s2RXV1vw/matt-roskovec-f-B3-u-W-TUcs-unsplash.jpg"
            />
            <CardCategory
              title="Digital Arts"
              img="https://i.postimg.cc/B61yg5TC/anshita-nair-f-F0munh-TD4w-unsplash.jpg"
            />
            <CardCategory
              title="Music"
              img="https://i.postimg.cc/6qMm6Htt/erik-mclean-Qzpgq-Elv-Si-A-unsplash.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
