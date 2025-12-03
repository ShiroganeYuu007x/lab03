/**
 * ฟังก์ชันจัดเรียงโพสต์ตามจำนวนไลค์จากมากไปน้อย
 * @param {Array} posts - อาร์เรย์ของโพสต์ (แต่ละโพสต์มีชื่อเรื่องและจำนวนไลค์)
 * @returns {Array} อาร์เรย์ใหม่ที่เรียงลำดับโพสต์จากมากไปน้อยตามจำนวนไลค์
 */
function sortPostsByLikes(posts) {
  // ใช้เมธอด sort() เพื่อจัดเรียงโพสต์
  // [...posts] สร้างสำเนาของอาร์เรย์เพื่อไม่ให้ปรับเปลี่ยนต้นฉบับ
  // (a, b) => b.likes - a.likes เป็น comparator function
  // b.likes - a.likes เรียงจากมากไปน้อย (descending order)
  // ถ้าต้องการจากน้อยไปมาก ให้ใช้ a.likes - b.likes
  return [...posts].sort((a, b) => b.likes - a.likes);
}

// ตัวอย่างการใช้งาน
const posts = [
  { title: 'Post A', likes: 120 },
  { title: 'Post B', likes: 300 },
  { title: 'Post C', likes: 150 }
];

console.log('โพสต์เรียงลำดับตามจำนวนไลค์ (มากไปน้อย):');
console.log(sortPostsByLikes(posts));

// ตัวอย่างเพิ่มเติม
console.log('\n--- ตัวอย่างเพิ่มเติม ---');

const posts2 = [
  { title: 'JavaScript Tips', likes: 500 },
  { title: 'CSS Tutorial', likes: 200 },
  { title: 'HTML Guide', likes: 350 },
  { title: 'React Basics', likes: 450 }
];

console.log('โพสต์เรียงลำดับตามจำนวนไลค์:');
console.log(sortPostsByLikes(posts2));

// ตรวจสอบว่าอาร์เรย์ต้นฉบับไม่เปลี่ยน
console.log('\nอาร์เรย์ต้นฉบับ (ไม่เปลี่ยน):');
console.log(posts);

// ตัวอย่างกับอาร์เรย์ที่มีไลค์เท่ากัน
const posts3 = [
  { title: 'Post 1', likes: 100 },
  { title: 'Post 2', likes: 100 },
  { title: 'Post 3', likes: 200 }
];

console.log('\nโพสต์ที่มีไลค์เท่ากัน:');
console.log(sortPostsByLikes(posts3));

