import { call } from "@redux-saga/core/effects";
import cartApi from "../../api/cartApi";


export function* cartUpdate(data) {
    // let cart = yield call(cartApi.update, data.payload)
    console.log(data)
}