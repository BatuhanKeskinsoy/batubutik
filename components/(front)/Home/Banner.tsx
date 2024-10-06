import SliderFullWidth from "@/components/(front)/Sliders/SliderFullWidth";
import { generalsTypes } from "@/types/generalTypes";
import { homeFullViewSliderTypes } from "@/types/pages/homeTypes";

interface IBannerProps {
  data: homeFullViewSliderTypes[];
}
function Banner({ data }: IBannerProps) {
  return <SliderFullWidth perView={1} data={data} />;
}

export default Banner;
