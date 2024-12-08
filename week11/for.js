const userList=[
    {name: 'pts', age: 23, score: 90 },
    {name: 'ldg', age: 25, score: 80 },
    {name: 'jyp', age: 24, score: 70 },
];

for (const user of userList){
    console.log('user:',user);
}

userList.forEach(function(e){
    console.log('user:',e);
})

userList.forEach(e=>console.log('user:',e));
userList.forEach(e=>{console.log('user',e)});