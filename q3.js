function isEvenOrOdd(num) {

    // ตรวจสอบว่า num หาร 2 แล้วเหลือเศษหรือไม่
    // ถ้าเศษเป็น 0 แสดงว่าเป็นเลขคู่
    if (num % 2 === 0) {
        return "Even";   // ส่งกลับคำว่า "Even" ถ้าเป็นเลขคู่
    } else {
        // ถ้ามีเศษ แสดงว่าเป็นเลขคี่
        return "Odd";    // ส่งกลับคำว่า "Odd" ถ้าเป็นเลขคี่
    }
}

console.log(isEvenOrOdd(7)); // Odd
console.log(isEvenOrOdd(4)); // Even