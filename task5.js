// false
user1 = {
    age: 17,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
};

// false
user2 = {
    age: 18,
    paid: true,
    blocked: true,
    badUsername: false,
    isAdmin: false
};

// true
user3 = {
    age: 18,
    paid: false,
    blocked: true,
    badUsername: true,
    isAdmin: true
};

// true
user4 = {
    age: 32,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
};

function hasAccess(user){
    // как правильно по стилю оформить такой перенос?
    return user.isAdmin || (
           user.age >= 18 && 
           user.age <= 35 && 
           user.paid &&
           !user.blocked &&
           !user.badUsername
    )
}

function hasAccessTernary(user){
    access = false;
    user.isAdmin ? access = true : user.age >= 18 ?  user.age <= 35 ?  user.paid ?  !user.blocked ?  !user.badUsername ? access = true : access = false  : access = false  : access = false  : access = false  : access = false;
    return access;
};

/*
console.log(hasAccess(user1));  //false
console.log(hasAccess(user2));  //false
console.log(hasAccess(user3));  //true
console.log(hasAccess(user4));  //true

console.log(hasAccessTernary(user1));  //false
console.log(hasAccessTernary(user2));  //false
console.log(hasAccessTernary(user3));  //true
console.log(hasAccessT(user4));  //true
*/