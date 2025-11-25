const obj = {
    name : "abc",
    rollNo:1,
    branch : "elce",
    section:"A",
    email :{
        email1: "abc@gmail.com",
        email2 :"abc246@gmail.com"
    }
}
obj.name = "ABC";
console.log(obj("name"));

const obj2 = {
    rollNo: 2,
    name: "xyz",
    branch:"elce",
    section:"A",
    email: {
        email1: "abc@gmail.com",
        email2 :"abc246@gmail.com"
    }
}
console.log(obj.email.email1);
console.log(obj["email"]["email"]);
console.log(obj.email["email1"]);
console.log(obj["email"].email1);

console.log(obj);
console.log(obj.branch);
console.log(obj["name"]);

console.log(typeofobj);
