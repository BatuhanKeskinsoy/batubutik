import SliderFullWidth from "@/components/(front)/Sliders/SliderFullWidth";
import { generalsTypes } from "@/types/generalTypes";

interface IBannerProps {
  generals: generalsTypes;
}
function Banner({ generals }: IBannerProps) {
  return <SliderFullWidth perView={1} generals={generals} />;
}

export default Banner;
