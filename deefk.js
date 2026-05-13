//any string that is given to function converts the first character to upper case

const nameToUpperCase = (name)=>{
    return name[0].toUpperCase() + name.slice(1);
}


//made changes to the deepak name to deefk
console.log(nameToUpperCase("deefk"))