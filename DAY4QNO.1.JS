// QUESTION NO.- 1
// How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

// CODE -
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var objects = "equal"
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] === obj2[key]) {
            objects= "equal"
        }
        else {
            objects= "not equal"
        }
    }
}
else {
    objects="not equal"
}
console.log(`OBJECTS are ${objects}`)


// OUTPUT - 

// OBJECTS are equal