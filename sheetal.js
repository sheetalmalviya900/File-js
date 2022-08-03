var obj = {
    username: "James",
    surname: "Brandon",
    id: "[2]"
};

var users = [
{    
"username": "Andy",
"surname": "Thompson",
"id": [0]
},
{    
"username": "Moe",
"surname": "Brown",
"id": [1]
}
];

var fs =require("fs");
fs.writeFileSync("AArti.json",JSON.stringify(users,null,4))

// data=fs.readFileSync("AArti.json")
// data1=JSON.parse(data)
// console.log(data1)


// b=fs.openSync("AArti.json")
if(fs.existsSync("AArti.json")){
    console.log("True")
}
