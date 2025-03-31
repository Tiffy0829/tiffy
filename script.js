document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: [
      "•沙威瑪大師",
      "•前50強企業產品使用者",
      "•諾貝爾文學獎讀者"
    ],
    skills: [
      { name: "抽象", level: 100 },
      { name: "端盤子", level: 50 },
      { name: "記憶力", level: 30 }
    ]
  };
  // 定義原始的圖片 URL
  let imageUrls = [
    "https://i.pinimg.com/236x/c4/9c/5a/c49c5af71cdc23c2ca49af489eb01cc8.jpg",
    "https://i.pinimg.com/236x/de/02/cc/de02cc47d6083b5a23e5da5ca8bb3f70.jpg",
    "https://i.pinimg.com/236x/93/83/51/9383513feddef1ecbd039ae3a3e8ea97.jpg"
  ];
  // 取得 #courses 和 #skills
  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成「授課內容」HTML
  coursesSection.innerHTML = `
      <h4>履歷</h4>
      <ul>
        ${skillData.courses.map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;

  // 生成「技能條」HTML
  skillsSection.innerHTML = `
      <h4>技能條</h4>
      ${skillData.skills
        .map(
          (skill) => `
        <div class="skill-bar">
          <label>${skill.name}</label>
          <div class="bar">
            <div class="level" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `
        )
        .join("")}
    `;
  
  // 取得 .square-image
  const squareImages = document.querySelectorAll(".square-image");
  // 初始化圖片背景
  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }
  // 初始化圖片
  initializeImages();
  
  // 隨機排列圖片背景
  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }
  // 綁定點擊事件
  document.querySelector(".square-images").addEventListener("click", shuffleImages);
});
const btn = document.querySelector(".btn");
const container = document.querySelector(".website-link");
let clickCount = 0;

container.style.position = "relative"; // 確保父層有相對定位
btn.style.position = "absolute"; // 初始設定為可移動

btn.addEventListener("mouseenter", () => {
  if (clickCount >= 5) return;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;

  // 限制範圍不會跑出去
  const maxX = containerWidth - btnWidth;
  const maxY = containerHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  clickCount++;

  if (clickCount >= 5) {
    alert("阿就沒做你想怎樣");
    btn.style.position = "static"; // 回歸原位
    btn.style.left = "auto";
    btn.style.top = "auto";
  }
});