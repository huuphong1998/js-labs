function getAllSubsets(arr) {
    return arr.reduce(
        (subsets, value) => {
            console.log(subsets.map((set) => [value, ...set]));
            return subsets.concat(subsets.map((set) => [value, ...set]));
        },
        [[]]
    );
}
console.log(getAllSubsets([1, 2, 3]));
