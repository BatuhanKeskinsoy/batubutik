import Categories from "@/components/(front)/Home/Categories";
import SliderFullWidth from "@/components/(front)/Sliders/SliderFullWidth";

function Banner() {
  return (
    <section>
        <SliderFullWidth perView={1} />
      <div className="lg:-mt-36 z-10">
        <Categories />
      </div>
    </section>
  );
}

export default Banner;
