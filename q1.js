// let name= "John";
//
// for (let i = 0; i < 10; i++) {
//     console.log(`Hello ${name}`);
// }

// let people = ["MorYuu","Jan", "Feb", "Mar", "Apr", "May"];
// for (const p of people) {
//     console.log(`Hello ${p}`);
// }




function convertTemperature(temp, scale) {
    if (scale === "C") {
        // แปลงจากเซลเซียสเป็นฟาเรนไฮต์
        return (temp * 9 / 5) + 32;
    } else if (scale === "F") {
        // แปลงจากฟาเรนไฮต์เป็นเซลเซียส
        return (temp - 32) * 5 / 9;
    } else {
        // ถ้าไม่ได้รับ scale ที่ถูกต้อง
        return `Invalid temperature: ${temp} (${scale})`;
    }
}
// console.log(convertTemperature(25, "C")); // 77 (เซลเซียส 25° = ฟาเรนไฮต์ 77°)
// console.log(convertTemperature(77, "F")); // 25 (ฟาเรนไฮต์ 77° = เซลเซียส 25°)
console.log(convertTemperature(100, "C"));