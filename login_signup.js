const fs=require("fs");
const user_input=require("readline-sync");
if(fs.existsSync("database.json")){
    f=1
}
else{
    var l=[]
    fs.writeFileSync("database.json",JSON.stringify(l,null,4))
}

function register(){
    var username=user_input.question("enter your name:-");
    var age=user_input.questionInt("enter your age:-");
    var gender=user_input.question("enter your gender:-");
    var password=user_input.question("enter the password")
    var strong=("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    if(password.match(strong)){
        var password1=user_input.question("confirm your password :- ");
        if(password==password1){
            console.log("sucessful")
            var read=fs.readFileSync("database.json")
            var readjson=JSON.parse(read)
            for (i of readjson){
                if(i["Username"]==username){
                    console.log("name is already exist")
                    register()
                }
            }
        }
        else{
            register()
        }
    }
    else{
        console.log("enter valid password");
        register();
    }
    var data=fs.readFileSync("database.json")
    var datajson=JSON.parse(data)
    a={"Username":username,"Password":password,"Age":age,"Gender":gender}
    datajson.push(a)
    db=fs.writeFileSync("database.json",JSON.stringify(datajson,null,4))
}

function access(){
    var username=user_input.question("enter your name:-");
    var password=user_input.question("enter your password:-");
    var read=fs.readFileSync("database.json")
    var readjson=JSON.parse(read)
    for(i of readjson){
        if (i["Username"]==username){
            if(i["Password"]==password){
                console.log("login sucessful")
            }
            else{
                console.log("enter valid password")
                access();
            }
        }
        else{
            console.log("enter valid username")
            access();
        }
    }
}
function home(option){
    var option=user_input.question("enter option login|signup :- ");
    if(option==="login"){
        access();
    }
    else if(option==="signup"){
        register();
    }
    else{
        console.log("please enter an option")
    }
}
home();