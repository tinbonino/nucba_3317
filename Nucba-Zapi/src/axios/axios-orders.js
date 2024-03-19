import axios from "axios";
import {
  createOrderFail,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
} from "../redux/orders/ordersSlice";
import { BASE_URL } from "../utils";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStart());

  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }
  } catch (err) {
    console.log(err);
    dispatch(
      fetchOrdersFail(
        "Upss, algo salío mal. No hay ordenes sin usuario, es como querer jugar al fútbol sin una pelota"
      )
    );
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });
    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (err) {
    dispatch(createOrderFail());
  }
};
