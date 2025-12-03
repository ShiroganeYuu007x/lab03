/**
 * ฟังก์ชันเช็คว่าคำเป็น Palindrome หรือไม่
 * (คำที่อ่านจากซ้ายไปขวาและขวาไปซ้ายเหมือนกัน)
 * @param {string} word - คำที่ต้องการเช็ค
 * @returns {boolean} true ถ้าเป็น Palindrome, false ถ้าไม่ใช่
 */
function isPalindrome(word) {
  // แปลงคำเป็นตัวอักษรพิมพ์เล็กทั้งหมด เพื่อให้การเปรียบเทียบไม่ขึ้นกับขนาดตัวอักษร
  const lowerWord = word.toLowerCase();

  // ขั้นตอนการสร้างคำจากขวาไปซ้าย (reverse):
  // 1. split('') - แยกคำให้เป็นอาร์เรย์ของตัวอักษร
  //    เช่น "madam" → ['m', 'a', 'd', 'a', 'm']
  // 2. reverse() - กลับลำดับของตัวอักษร
  //    เช่น ['m', 'a', 'd', 'a', 'm'] → ['m', 'a', 'd', 'a', 'm']
  // 3. join('') - รวมตัวอักษรกลับเป็นคำ
  //    เช่น ['m', 'a', 'd', 'a', 'm'] → "madam"
  const reversedWord = lowerWord.split('').reverse().join('');

  // เปรียบเทียบคำต้นฉบับกับคำที่กลับข้อความ
  // ถ้าเหมือนกัน แสดงว่าเป็น Palindrome
  return lowerWord === reversedWord;
}

// ตัวอย่างการใช้งาน
console.log(isPalindrome("madam")); // => true
console.log(isPalindrome("racecar")); // => true
console.log(isPalindrome("hello")); // => false
console.log(isPalindrome("A")); // => true (ตัวอักษรเดียว)
console.log(isPalindrome("Noon")); // => true (พิมพ์เล็กพิมพ์ใหญ่ผสม)
console.log(isPalindrome("step")); // => false
console.log(isPalindrome("level")); // => true
console.log(isPalindrome("civic")); // => true

