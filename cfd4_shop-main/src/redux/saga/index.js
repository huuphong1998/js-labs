import { takeEvery, takeLatest } from 'redux-saga/effects'
import { USER } from '../reducers/authReducer'
import { CART } from '../reducers/cartReducer'
import { fetchUserLogin } from './authSaga'
import { cartUpdate } from './cartSaga'

export default function* saga() {
    // yield takeEvery(USER.fetchLogin, fetchUserLogin)
    yield takeLatest(USER.fetchLogin, fetchUserLogin)

    yield takeLatest([CART.increment, CART.descrement, CART.addCart, CART.remove], cartUpdate)
}


// let arrSub = []
// function post(comment){
//     console.log('Cô gái comment: ' + comment)

//     for(let i in arrSub){
//         arrSub[i]()
//     }
// }

// arrSub.push(() => {

//     console.log('em dep qua')
// })