import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();
      //   console.log(result);

      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.items,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
