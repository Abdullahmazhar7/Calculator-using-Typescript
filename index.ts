import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        type:"input",
        name:"Num1",
        message:"Enter your first Number : "
    },

    {
        type:"input",
        name:"Num2",
        message:"Enter your Second Number : "
    },

    {
        type:"list",
        name:"Operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
        message:"Select your Operator: "
    }
]);

const {Num1,Num2,Operator} = answers
if(Num1 && Num2 && Operator){
    if(Operator==="Addition"){
        console.log(`"Answer : ${Num1 + Num2}`)
    }
    else if(Operator==="Subtraction"){
        console.log(`Answer : ${Num1 - Num2}`)
    }
    else if(Operator==="Multiplication"){
        console.log(`Answer: ${Num1 * Num2}`)
    }
    else{
        console.log(`Answer: ${Num1 / Num2}`)
    }
}
else{
    console.log("Invalid Selection")
}

console.log(answers);











