function reduce(arr, cb, initValue) {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;

    if (initValue === undefined) {
        initValue = arr[0];
        arr = arr.slice(1);
    }

    for (const item of arr) {
        initValue = cb(initValue, item);
    }

    return initValue;
}
// console.log(
//     reduce(
//         [1, 2, 3, 4],
//         (sum, num) => {
//             return sum + num;
//         },
//         0
//     )
// );

const actions = [
    { type: 'CHANGE_SPEED', payload: 3 }, // speed: 3, lastSpeed: 1
    { type: 'TURN_OFF' }, // speed: 0, lastSpeed: 3
    { type: 'TURN_ON' }, // speed: 3, lastSpeed: 3
];

const initState = {
    speed: 0,
    lastSpeed: 1,
};

console.log(
    reduce(
        actions,
        (state, action) => {
            if (action.type === 'CHANGE_SPEED') {
                return {
                    ...state,
                    speed: action.payload,
                };
            }
            if (action.type === 'TURN_OFF') {
                return {
                    ...state,
                    speed: 0,
                    lastSpeed: state.speed,
                };
            }
            if (action.type === 'TURN_ON') {
                return {
                    ...state,
                    speed: state.lastSpeed,
                };
            }

            return state;
        },
        initState
    )
);
