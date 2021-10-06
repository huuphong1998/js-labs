const student = {
    id: 1,
    name: 'Huu Phong',
    isHero: true,
};

const keyLists = Object.keys(student); // [ 'id', 'name', 'isHero' ]
for (let i = 0; i < keyLists.length; i++) {
    const key = keyLists[i];

    console.log('key: ', key);
    console.log('value: ', student[key]);
}

// forEach
Object.keys(student).forEach((key) => {
    console.log('key: ', key);
    console.log('value: ', student[key]);
});

// for...in
for (let key in student) {
    console.log('key: ', key);
    console.log('value: ', student[key]);
}
