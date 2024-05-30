const name = "vivekkoyani"

const checkDuppli = (str) => {
    const item = str.split('');
    const charCount = {};

    item.forEach(element => {
        if(charCount[element]){
            charCount[element]++;
        }else{
            charCount[element] = 1;
        }
    });

}

checkDuppli(name)