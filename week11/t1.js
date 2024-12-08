let user ={
    name: 'Park',
    gender: 'male'
};
let changeName=function(user, newname){
    let newUser=user;
    newUser.name=newname;
    return newUser;
}
let user2=changeName(user,'Taeseong');
if(user!==user2){
    console.log('유저정보변경');
}
console.log(user.name, user2.name);
console.log(user==user2);