const convert12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if(hours === "12") hours = "00";

    if(modifier === 'PM') hours = parseInt(hours) + 12;

    return `${hours}:${minutes}`
}

console.log("", convert12to24("02:12 PM"));
console.log("", convert12to24("12:00 PM"));
console.log("", convert12to24("1:12 PM"));
console.log("", convert12to24("12:12 PM"));