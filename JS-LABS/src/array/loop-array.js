// before ES5
const numberList = [2, 4, 6];
for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    console.log(number); // 2, 4, 6
}

// ES5 forEach: khi nào cần index thì dùng forEach
const numberList1 = [2, 4, 6];
numberList1.forEach((x) => console.log(x)); // 2, 4, 6

// ES6 for...of: Không lấy được index
const numberList2 = [2, 4, 6];
for (const number of numberList2) {
    console.log(number); // 2, 4, 6
}
