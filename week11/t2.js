let user ={
    name: 'Park',
    gender: 'male'
};
let changeName=function(user, newname){
    return{
        name:newname,
        gender:user.gender
    }
}
let user2=changeName(user,'Taeseong');
if(user!==user2){
    console.log('유저정보변경');
}
console.log(user.name, user2.name);
console.log(user==user2);