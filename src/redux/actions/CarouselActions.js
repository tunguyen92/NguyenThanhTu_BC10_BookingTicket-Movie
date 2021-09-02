import axios from "axios";
import { QLPhimService } from "../../services/QuanLyPhimService";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await QLPhimService.layDanhSachBanner();
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
