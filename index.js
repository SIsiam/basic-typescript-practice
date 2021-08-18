// typeScript basic 
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown
var myName = "Shahidul Islam";
var age;
age = 12;
var isHungry = false;
var gameDirection = "right";
var idNumber = 234234;
idNumber = 'gdsfgew444dsa';
idNumber = 122323;
var person = {
    name: " Clever Programmer",
    age: 45,
    hobby: "Nature Photography"
};
var person2 = {
    name: "Someone",
    age: 80
};
//  Array 
var numbers = [33, 40, 50, 80, 'stefjhj'];
var persons = [
    {
        name: " Clever Programmer",
        age: 45,
        hobby: "Nature Photography"
    },
    {
        name: " Clever Programmer",
        age: 45,
        hobby: "Nature Photography"
    },
    {
        name: " Clever Programmer",
        age: 45,
        hobby: "Nature Photography"
    }
];
// functions
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting("Programmer Siam");
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello, my name is  " + name + ", And I'm " + age + "!");
};
introduce({
    name: "Shahidul Islam Siam",
    age: 12,
    hobby: "LOL"
});
var getArray = function (array) {
    return array;
};
getArray(['abul', 'babul', 'jabul', 1234, 3452]);
getArray([1, 34, 1243, 21.23]);
// enum
var programmingLanguage;
(function (programmingLanguage) {
    programmingLanguage["JavaScript"] = "JavaScript";
    programmingLanguage["Python"] = "Python";
    programmingLanguage["TypeScript"] = "TypeScript";
    programmingLanguage["C"] = "C language";
    programmingLanguage["java"] = "java";
    programmingLanguage["kotlin"] = "kotlin";
    programmingLanguage["Php"] = "php";
})(programmingLanguage || (programmingLanguage = {}));
console.log(programmingLanguage.TypeScript);
