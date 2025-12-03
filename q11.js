/**
 * ฟังก์ชันคำนวณสรุปรายการสินค้าในตะกร้า
 * @param {Array} cart - อาร์เรย์ของสินค้า (แต่ละสินค้ามีชื่อและราคา)
 * @returns {Object} ออบเจ็กต์ที่มี total (ราคารวม) และ itemNames (ชื่อสินค้า)
 */
function calculateCartSummary(cart) {
  // คำนวณราคารวมทั้งหมด
  // reduce() วนลูปผ่านอาร์เรย์ และสะสมค่า
  // acc คือตัวสะสม (accumulator) ที่เริ่มต้นที่ 0
  // item คือสินค้าแต่ละชิ้นในอาร์เรย์
  // acc + item.price คือการบวกราคาของสินค้าแต่ละชิ้นเข้ากับยอดรวม
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // สร้างชื่อสินค้าในรูปแบบข้อความ คั่นด้วยเครื่องหมายลูกน้ำ
  // map() แปลงอาร์เรย์สินค้าให้เป็นอาร์เรย์ชื่อสินค้า
  // item => item.name ดึงชื่อจากแต่ละสินค้า
  // join(', ') รวมชื่อทั้งหมดเข้าด้วยกัน โดยคั่นด้วย ", "
  const itemNames = cart.map(item => item.name).join(', ');

  // คืนค่าออบเจ็กต์ที่มี total และ itemNames
  return { total, itemNames };
}

// ตัวอย่างการใช้งาน
const cart = [
  { name: 'Notebook', price: 250 },
  { name: 'Pen', price: 20 },
  { name: 'Eraser', price: 10 }
];

const summary = calculateCartSummary(cart);
console.log(`รายการสินค้า: ${summary.itemNames}`);
console.log(`ราคารวม: ${summary.total} บาท`);

// ตัวอย่างเพิ่มเติม
console.log('\n--- ตัวอย่างเพิ่มเติม ---');

const cart2 = [
  { name: 'Book', price: 150 },
  { name: 'Mouse', price: 500 },
  { name: 'Keyboard', price: 800 }
];
const summary2 = calculateCartSummary(cart2);
console.log(`รายการสินค้า: ${summary2.itemNames}`);
console.log(`ราคารวม: ${summary2.total} บาท`);

const cart3 = [
  { name: 'Coffee', price: 45 }
];
const summary3 = calculateCartSummary(cart3);
console.log(`รายการสินค้า: ${summary3.itemNames}`);
console.log(`ราคารวม: ${summary3.total} บาท`);

