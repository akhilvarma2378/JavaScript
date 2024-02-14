// const appUser = new Object();
// console.log(appUser);
// appUser.id = 2435;
// appUser.name = "akhil";

// console.log(appUser);

const obj1 = {1:"a",4:"d"};
const obj2 = {2:"b",5:"e"};
const obj3 = {3:"c",6:"f"};

// const obj4 = Object.assign({},obj1,obj2,obj3); // with {} all copies assign to a new obj otherwise obj1 will be edited
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);
console.log(obj1);

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //object de structure

// console.log(courseInstructor);
console.log(instructor);