/**
 * ฟังก์ชันนับจำนวนคำในประโยค
 * @param {string} sentence - ประโยคที่ต้องการนับคำ
 * @returns {number} จำนวนคำในประโยค
 */
function countWords(sentence) {
  // ตรวจสอบว่าประโยคว่างหรือไม่
  if (sentence.trim() === '') {
    return 0; // ถ้าประโยคว่าง ให้คืนค่า 0
  }

  // ขั้นตอนการแยกคำ:
  // 1. trim() - ลบช่องว่างที่ด้านหน้าและด้านหลังของประโยค
  //    เช่น "  JavaScript is fun  " → "JavaScript is fun"
  // 2. split(/\s+/) - แยกประโยคเป็นอาร์เรย์ของคำ โดยใช้ช่องว่างใดๆ (ช่องว่าง, tab, newline) เป็นตัวแยก
  //    /\s+/ เป็น regex ที่ตรงกับช่องว่างหนึ่งตัวหรือมากกว่า
  //    เช่น "  Hello   world  " → ["Hello", "world"]
  // 3. length - หาจำนวนของคำในอาร์เรย์
  //    เช่น ["JavaScript", "is", "fun"].length → 3
  const words = sentence.trim().split(/\s+/);

  // คืนค่าจำนวนคำ
  return words.length;
}

// ตัวอย่างการใช้งาน
console.log(countWords("JavaScript is fun")); // => 3
console.log(countWords("Hello world")); // => 2
console.log(countWords("The quick brown fox jumps")); // => 5
console.log(countWords("OneWord")); // => 1 (คำเดียว)
console.log(countWords("   ")); // => 0 (เฉพาะช่องว่าง)
console.log(countWords("")); // => 0 (ประโยคว่าง)
console.log(countWords("  Hello   world  ")); // => 2 (มีช่องว่างหลายตัว)

