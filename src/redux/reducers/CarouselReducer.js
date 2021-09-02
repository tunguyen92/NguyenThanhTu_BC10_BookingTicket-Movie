import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
  arrImg: [
    {
      maPhim: 1322,
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrImg = action.arrImg;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
