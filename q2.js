function countCharacter(str, char) {

    // ตัวแปรเก็บจำนวนครั้งที่พบตัวอักษร
    let count = 0;

    // ลูปวนผ่านทุกตัวอักษรในสตริง str
    for (let i = 0; i < str.length; i++) {

        // ถ้าตัวอักษรตำแหน่ง i ตรงกับตัวอักษรที่เราต้องการหา
        if (str[i] === char) {

            // เพิ่มจำนวน count ขึ้น 1
            count++;
        }
    }

    // ส่งค่าจำนวนตัวอักษรกลับออกไป
    return count;
}

console.log(countCharacter("javascript", "a"));
console.log(countCharacter("hello world", "l"));