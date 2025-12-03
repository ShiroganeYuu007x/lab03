/**
 * ฟังก์ชันกรองผู้ใช้ที่เข้าสู่ระบบ
 * @param {Array} users - อาร์เรย์ของผู้ใช้ (แต่ละคนมีชื่อและสถานะ isLoggedIn)
 * @returns {Array} อาร์เรย์ใหม่ที่มีเฉพาะผู้ใช้ที่เข้าสู่ระบบ
 */
function filterLoggedInUsers(users) {
  // ใช้เมธอด filter() เพื่อกรองผู้ใช้
  // filter() คืนค่าอาร์เรย์ใหม่ที่มีเฉพาะสมาชิกที่เป็นไปตามเงื่อนไข
  // user => user.isLoggedIn === true - ตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่
  // ส่งกลับเฉพาะผู้ใช้ที่มี isLoggedIn เป็น true
  return users.filter(user => user.isLoggedIn === true);
}

// ตัวอย่างการใช้งาน
const users = [
  { name: 'Alice', isLoggedIn: true },
  { name: 'Bob', isLoggedIn: false },
  { name: 'Charlie', isLoggedIn: true }
];

console.log('ผู้ใช้ที่เข้าสู่ระบบ:');
console.log(filterLoggedInUsers(users));

// ตัวอย่างเพิ่มเติม
console.log('\n--- ตัวอย่างเพิ่มเติม ---');

const users2 = [
  { name: 'David', isLoggedIn: true },
  { name: 'Eve', isLoggedIn: true },
  { name: 'Frank', isLoggedIn: false },
  { name: 'Grace', isLoggedIn: false },
  { name: 'Henry', isLoggedIn: true }
];

console.log('ผู้ใช้ที่เข้าสู่ระบบ:');
console.log(filterLoggedInUsers(users2));

const users3 = [
  { name: 'Isaac', isLoggedIn: false },
  { name: 'Jack', isLoggedIn: false }
];

console.log('\nผู้ใช้ที่เข้าสู่ระบบ (ไม่มีผู้ใช้):');
console.log(filterLoggedInUsers(users3));

const users4 = [];

console.log('\nผู้ใช้ที่เข้าสู่ระบบ (อาร์เรย์ว่าง):');
console.log(filterLoggedInUsers(users4));

