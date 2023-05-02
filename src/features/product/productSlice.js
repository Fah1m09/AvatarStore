import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageA(F).png",
      name: "VRC Avatar name Avatown A female",
      rating: 5,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "female",
      polygon: 33000,
      content: "PC",
      createdBy: 1,
      isLiked: false,
    },
    {
      id: 2,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageB(F).png",
      name: "Avatar name avatown nice original Avatown B",
      rating: 3.7,
      likes: 30,
      price: 50,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
      createdBy: 2,
      isLiked: false,
    },
    {
      id: 3,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageC(M).png",
      name: "Avatar name avatown nice original Avatown C",
      rating: 4,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "male",
      polygon: 3000,
      content: "PC",
      isLiked: false,
      createdBy: 1
    },
    {
      id: 4,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageD(F).png",
      name: "Avatar name avatown nice original Avatown D",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 12000,
      content: "Quest",
      isLiked: false,
      createdBy: 1
    },
    {
      id: 5,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageE(M).png",
      name: "Avatar name avatown nice original Avatown E",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "male",
      polygon: 43000,
      content: "Quest",
      isLiked: false,
      createdBy: 2
    },
    {
      id: 6,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageF(F).png",
      name: "Avatar name avatown nice original Avatown F",
      rating: 4.7,
      likes: 0,
      price: 10,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 7,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageG(F).png",
      name: "Avatar name avatown nice original Avatown G",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 13000,
      content: "PC",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 8,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageH(F).png",
      name: "Avatar name avatown nice original Avatown H",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 55000,
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 9,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageI(F).png",
      name: "Avatar name 9",
      rating: 4.7,
      likes: 0,
      price: 22,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 10,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageJ(M).png",
      name: "Avatar name 10",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "male",
      polygon: 33000,
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 11,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageK(M).png",
      name: "Avatar name",
      rating: 5,
      likes: 100,
      price: 15,
      autoUpload: false,
      gender: "male",
      polygon: 33000,
      content: "PC",
      isLiked: false,
      createdBy: 2
    },
    {
      id: 12,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageL(F).png",
      name: "Avatar name 12",
      rating: 3.7,
      likes: 30,
      price: 8,
      autoUpload: true,
      gender: "female",
      polygon: 3000,
      content: "Quest",
      isLiked: false,
      createdBy: 1
    },
    {
      id: 13,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageM(F).png",
      name: "Avatar name 13",
      rating: 4,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "female",
      polygon: 18000,
      content: "PC",
      isLiked: false,
      createdBy: 1
    },
    {
      id: 14,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageN(F).png",
      name: "Avatar name 14",
      rating: 4,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 25000,
      content: "Quest",
      isLiked: false,
      createdBy: 2
    },
    {
      id: 15,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageO(F).png",
      name: "Avatar name 15",
      rating: 4.7,
      likes: 660,
      price: 11,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
      isLiked: false,
      createdBy: 2
    },
    {
      id: 16,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageP(F).png",
      name: "Avatar name 16",
      rating: 4.7,
      likes: 700,
      price: 22,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 17,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageQ(M).png",
      name: "Avatar name 17",
      rating: 2,
      likes: 50,
      price: 34,
      autoUpload: true,
      gender: "male",
      polygon: 21000,
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 18,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageR(F).png",
      name: "Avatar name 18",
      rating: 4.7,
      likes: 30,
      price: 30,
      autoUpload: true,
      polygon: 13000,
      gender: "female",
      content: "Quest",
      isLiked: false,
      createdBy: 3
    },
    {
      id: 19,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageS(F).png",
      name: "Avatar name 19",
      rating: 4.7,
      likes: 20,
      price: 40,
      autoUpload: true,
      gender: "female",
      polygon: 300,
      content: "Quest",
      isLiked: false,
      createdBy: 2
    },
    {
      id: 20,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageT(F).png",
      name: "Avatar name 20",
      rating: 4.7,
      likes: 100,
      price: 50,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
      isLiked: false,
      createdBy: 1
    },
  ],
  users: [
    {
      id: 1,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageA(F).png",
      userName: "Avatar Joe's",
    },
    {
      id: 2,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageB(F).png",
      userName: "Avatar James",
    },
    {
      id: 3,
      img: "http://127.0.0.1:5173/avatarPictures/VRCimageC(M).png",
      userName: "Avatar Kai",
    },
  ],
};

// create slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    likeDislike: (state, action) => {
      const indexToUpdate = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === indexToUpdate
      );
      if (existingProduct) {
        existingProduct.isLiked = !existingProduct.isLiked
      } 
  },
  },
});

export default productSlice.reducer;
export const { likeDislike } =
  productSlice.actions;
