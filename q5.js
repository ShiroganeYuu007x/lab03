/**
 * ฟังก์ชันพิมพ์รูปแบบดาว
 * @param {number} rows - จำนวนแถวของดาว
 */
function printStars(rows) {
  // วนลูปภายนอก: วนลูปสำหรับแต่ละแถว (row)
  // row = 1 เป็นแถวแรก
  // row <= rows เป็นเงื่อนไขให้วนลูปตราบเท่าที่ row ยังน้อยกว่าหรือเท่ากับจำนวนแถวทั้งหมด
  // row++ เพิ่มค่า row ทีละ 1 ในแต่ละรอบ
  for (let row = 1; row <= rows; row++) {
    // สร้างตัวแปรเพื่อเก็บดาว
    let stars = '';

    // วนลูปภายใน: วนลูปเพื่อเพิ่มดาวในแต่ละแถว
    // col = 1 เป็นดาวตัวแรก
    // col <= row เป็นเงื่อนไขให้เพิ่มดาวจำนวนเท่ากับหมายเลขแถว
    // col++ เพิ่มค่า col ทีละ 1 ในแต่ละรอบ
    for (let col = 1; col <= row; col++) {
      // เพิ่มดาว (*) ให้กับตัวแปร stars
      stars += '*';
    }

    // พิมพ์ดาวของแถวนั้นออกมา
    console.log(stars);
  }
}

// ตัวอย่างการใช้งาน
console.log('printStars(3):');
printStars(3);

console.log('\nprintStars(5):');
printStars(5);

console.log('\nprintStars(1):');
printStars(1);

