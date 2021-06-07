import createSlice from '../../core/createSlice'

let cart = JSON.parse(localStorage.getItem('cart'))

const initialState = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
    shipping_option: cart?.shipping_option || 'free',
    shipping_price: cart?.shipping_price || 0,
    payment_option: cart?.payment_option || 'paypal'
}

function returnCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
}


let { reducer, action, TYPE } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: function (state, action) {
            let { list, amount } = state

            let f = list.findIndex(e => e._id === action.payload._id)

            if (f !== -1) {
                list[f].cartNum++

                amount += list[f].real_price

            } else {
                let item = JSON.parse(JSON.stringify(action.payload))

                item.cartNum = 1
                list.push(item)

                amount += item.real_price
            }



            return returnCart({
                ...state,
                num: state.num + 1,
                list,
                amount
            })
        },
        remove: function (state, action) {
            let { list, amount, num } = state

            let f = list.findIndex(e => e._id === action.payload)
            if (f !== -1) {
                amount -= list[f].real_price * list[f].cartNum
                num -= list[f].cartNum
                list.splice(f, 1)
            }

            return returnCart({
                ...state,
                num,
                list,
                amount
            })

        },
        increment: function (state, action) {
            let { list, amount } = state

            let f = list.findIndex(e => e._id === action.payload)
            if (f !== -1) {
                list[f].cartNum++
                amount += list[f].real_price
            }

            return returnCart({
                ...state,
                num: state.num + 1,
                list,
                amount
            })
        },
        descrement: function (state, action) {
            let { list, amount } = state

            let f = list.findIndex(e => e._id === action.payload)
            if (f !== -1) {
                amount -= list[f].real_price
                if (list[f].cartNum > 1) {
                    list[f].cartNum--
                } else {
                    list.splice(f, 1)
                }


            }

            return returnCart({
                ...state,
                num: state.num - 1,
                list,
                amount
            })
        },

        cartUpdate: function (state, ation) {
            return returnCart({
                ...state,
                ...ation.payload
            })
        },
    }
})

export default reducer

export const addCart = action.addCart

export const removeItemCart = action.remove

export const cartIncrement = action.increment

export const cartDerement = action.descrement

export const cartUpdate = action.cartUpdate