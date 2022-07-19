import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
} from './categoryRedux'
import {
  getSliderStart,
  getSliderSuccess,
  getSliderFailure,
  deleteSliderStart,
  deleteSliderSuccess,
  deleteSliderFailure,
  updateSliderStart,
  updateSliderSuccess,
  updateSliderFailure,
  addSliderStart,
  addSliderSuccess,
  addSliderFailure,
} from './sliderRedux'
import {
  getContactStart,
  getContactSuccess,
  getContactFailure,
  deleteContactStart,
  deleteContactSuccess,
  deleteContactFailure,
  updateContactStart,
  updateContactSuccess,
  updateContactFailure,
  addContactStart,
  addContactSuccess,
  addContactFailure,
} from './contactsRedux'
import {
  getAboutStart,
  getAboutSuccess,
  getAboutFailure,
  deleteAboutStart,
  deleteAboutSuccess,
  deleteAboutFailure,
  updateAboutStart,
  updateAboutSuccess,
  updateAboutFailure,
  addAboutStart,
  addAboutSuccess,
  addAboutFailure,
} from './aboutRedux'
import {
  getArticleStart,
  getArticleSuccess,
  getArticleFailure,
  deleteArticleStart,
  deleteArticleSuccess,
  deleteArticleFailure,
  updateArticleStart,
  updateArticleSuccess,
  updateArticleFailure,
  addArticleStart,
  addArticleSuccess,
  addArticleFailure,
} from './articleRedux'
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/items/find/");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
export const getCategory = async (dispatch) => {
  dispatch(getCategoryStart());
  try {
    const res = await publicRequest.get("/cat/find/");
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};
export const getSlider = async (dispatch) => {
  dispatch(getSliderStart());
  try {
    const res = await publicRequest.get("/slider/find/");
    dispatch(getSliderSuccess(res.data));
  } catch (err) {
    dispatch(getSliderFailure());
  }
};
export const getContact = async (dispatch) => {
  dispatch(getContactStart());
  try {
    const res = await publicRequest.get("/contact/find/");
    dispatch(getContactSuccess(res.data));
  } catch (err) {
    dispatch(getContactFailure());
  }
};
export const getAbout = async (dispatch) => {
  dispatch(getAboutStart());
  try {
    const res = await publicRequest.get("/about/find/");
    dispatch(getAboutSuccess(res.data));
  } catch (err) {
    dispatch(getAboutFailure());
  }
};
export const getArticle = async (dispatch) => {
  dispatch(getArticleStart());
  try {
    const res = await publicRequest.get("/article/find/");
    dispatch(getArticleSuccess(res.data));
  } catch (err) {
    dispatch(getArticleFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/items/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    const res = await userRequest.delete(`/cat/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (err) {
    dispatch(deleteCategoryFailure());
  }
};
export const deleteSlider = async (id, dispatch) => {
  dispatch(deleteSliderStart());
  try {
    const res = await userRequest.delete(`/slider/${id}`);
    dispatch(deleteSliderSuccess(id));
  } catch (err) {
    dispatch(deleteSliderFailure());
  }
};
export const deleteContact = async (id, dispatch) => {
  dispatch(deleteContactStart());
  try {
    const res = await userRequest.delete(`/contact/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (err) {
    dispatch(deleteContactFailure());
  }
};
export const deleteAbout = async (id, dispatch) => {
  dispatch(deleteAboutStart());
  try {
    const res = await userRequest.delete(`/about/${id}`);
    dispatch(deleteAboutSuccess(id));
  } catch (err) {
    dispatch(deleteAboutFailure());
  }
};
export const deleteArticle = async (id, dispatch) => {
  dispatch(deleteArticleStart());
  try {
    const res = await userRequest.delete(`/article/${id}`);
    dispatch(deleteArticleSuccess(id));
  } catch (err) {
    dispatch(deleteArticleFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/items/${id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure(err));
  }
};
export const updateCategory = async (id, category, dispatch) => {
  dispatch(updateCategoryStart());
  try {
    const res = await userRequest.put(`/cat/${id}`, category);
    dispatch(updateCategorySuccess(res.data));
  } catch (err) {
    dispatch(updateCategoryFailure(err));
  }
};
export const updateSlider = async (id, slider, dispatch) => {
  dispatch(updateSliderStart());
  try {
    const res = await userRequest.put(`/slider/${id}`, slider);
    dispatch(updateSliderSuccess(res.data));
  } catch (err) {
    dispatch(updateSliderFailure(err));
  }
};
export const updateContact = async (id, contact, dispatch) => {
  dispatch(updateContactStart());
  try {
    const res = await userRequest.put(`/contact/${id}`, contact);
    dispatch(updateContactSuccess(res.data));
  } catch (err) {
    dispatch(updateContactFailure(err));
  }
};
export const updateAbout = async (id, about, dispatch) => {
  dispatch(updateAboutStart());
  try {
    const res = await userRequest.put(`/about/${id}`, about);
    dispatch(updateAboutSuccess(res.data));
  } catch (err) {
    dispatch(updateAboutFailure(err));
  }
};
export const updateArticle = async (id, article, dispatch) => {
  dispatch(updateArticleStart());
  try {
    const res = await userRequest.put(`/article/${id}`, article);
    dispatch(updateArticleSuccess(res.data));
  } catch (err) {
    dispatch(updateArticleFailure(err));
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/items/add`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
export const addCategory = async (category, dispatch) => {
  dispatch(addCategoryStart());
  try {
    const res = await userRequest.post(`/cat/`, category);
    dispatch(addCategorySuccess(res.data));
  } catch (err) {
    dispatch(addCategoryFailure());
  }
};
export const addSlider = async (slider, dispatch) => {
  dispatch(addSliderStart());
  try {
    const res = await userRequest.post(`/slider/`, slider);
    dispatch(addSliderSuccess(res.data));
  } catch (err) {
    dispatch(addSliderFailure());
  }
};
export const addContact = async (contact, dispatch) => {
  dispatch(addContactStart());
  try {
    const res = await userRequest.post(`/contact/`, contact);
    dispatch(addContactSuccess(res.data));
  } catch (err) {
    dispatch(addContactFailure());
  }
};
export const addAbout = async (about, dispatch) => {
  dispatch(addAboutStart());
  try {
    const res = await userRequest.post(`/about/`, about);
    dispatch(addAboutSuccess(res.data));
  } catch (err) {
    dispatch(addAboutFailure());
  }
};
export const addArticle = async (article, dispatch) => {
  dispatch(addArticleStart());
  try {
    const res = await userRequest.post(`/article/`, article);
    dispatch(addArticleSuccess(res.data));
  } catch (err) {
    dispatch(addArticleFailure());
  }
};
