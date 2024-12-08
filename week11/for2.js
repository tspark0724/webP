const userList=[
    {name: 'pts', age: 23, math: 90, science:90 },
    {name: 'ldg', age: 25, math: 80, science:80 },
    {name: 'jyp', age: 24, math: 70, science:70 },
];
const plus=(a,b)=>a+b;
userList.forEach(e=>console.log(`${e.name} total: ${plus(e.math,e.science)}`));