/**
 * ฟังก์ชันค้นหาสินค้าตามชื่อ
 * @param {Array} products - อาร์เรย์ของสินค้า (แต่ละสินค้ามีชื่อและราคา)
 * @param {string} searchTerm - คำค้นหา
 * @returns {Object|undefined} สินค้าแรกที่ชื่อของสินค้ามีคำค้นหาอยู่ หรือ undefined ถ้าไม่พบ
 */
function searchProductByName(products, searchTerm) {
  // ใช้เมธอด find() เพื่อค้นหาสินค้าแรกที่ตรงกับเงื่อนไข
  // find() คืนค่าสมาชิกแรกที่เป็นไปตามเงื่อนไข หรือ undefined ถ้าไม่พบ
  // product => product.name.includes(searchTerm)
  // - ตรวจสอบว่าชื่อสินค้ามีคำค้นหาอยู่หรือไม่
  // - includes() เป็น case-sensitive (ตัวพิมพ์เล็กพิมพ์ใหญ่มีความแตกต่าง)
  // - สามารถใช้ .toLowerCase() เพื่อให้การค้นหา case-insensitive
  return products.find(product => product.name.includes(searchTerm));
}

// ตัวอย่างการใช้งาน
const products = [
  { name: 'Apple iPhone', price: 30000 },
  { name: 'Samsung Galaxy', price: 25000 },
  { name: 'Xiaomi Redmi', price: 10000 }
];

const searchTerm = 'Galaxy';
console.log('ค้นหา:', searchTerm);
console.log(searchProductByName(products, searchTerm));
// => { name: 'Samsung Galaxy', price: 25000 }

// ตัวอย่างเพิ่มเติม
console.log('\n--- ตัวอย่างเพิ่มเติม ---');

console.log('\nค้นหา: Apple');
console.log(searchProductByName(products, 'Apple'));
// => { name: 'Apple iPhone', price: 30000 }

console.log('\nค้นหา: Xiaomi');
console.log(searchProductByName(products, 'Xiaomi'));
// => { name: 'Xiaomi Redmi', price: 10000 }

console.log('\nค้นหา: Nokia (ไม่พบ)');
console.log(searchProductByName(products, 'Nokia'));
// => undefined

// ตัวอย่าง: ค้นหาโดยใช้ส่วนของชื่อ
console.log('\nค้นหา: Red');
console.log(searchProductByName(products, 'Red'));
// => { name: 'Xiaomi Redmi', price: 10000 }

// ตัวอย่างเพิ่มเติม: ค้นหา case-insensitive
/**
 * ฟังก์ชันค้นหาสินค้าแบบไม่สนใจตัวพิมพ์เล็กพิมพ์ใหญ่
 */
function searchProductByNameIgnoreCase(products, searchTerm) {
  // แปลงคำค้นหาและชื่อสินค้าทั้งหมดเป็นตัวพิมพ์เล็ก
  // เพื่อให้การค้นหา case-insensitive
  return products.find(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

console.log('\n--- ค้นหา Case-Insensitive (ไม่สนใจตัวพิมพ์) ---');
console.log('\nค้นหา: galaxy (ตัวเล็ก)');
console.log(searchProductByNameIgnoreCase(products, 'galaxy'));
// => { name: 'Samsung Galaxy', price: 25000 }

console.log('\nค้นหา: APPLE (ตัวใหญ่)');
console.log(searchProductByNameIgnoreCase(products, 'APPLE'));
// => { name: 'Apple iPhone', price: 30000 }

