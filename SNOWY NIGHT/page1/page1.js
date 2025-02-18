document.addEventListener("DOMContentLoaded", function() {
    let texts = document.querySelectorAll(".snow-text");

    texts.forEach((text, index) => {
        let target = text.getAttribute("data-target").split(",");
        let targetX = target[0] + "%"; // 目标 X 位置
        let targetY = target[1] + "vh"; // 目标 Y 位置

        setTimeout(() => {
            text.style.opacity = "1";
            text.style.transform = `translate(${targetX}, ${targetY})`;
        }, index * 500); // 依次落下，增加延迟
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const snowTextElements = document.querySelectorAll(".snow-text");

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        let size = Math.random() * 4 + 2; // 2px - 6px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = "-10px";
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;

        document.body.appendChild(snowflake);

        let fallInterval = setInterval(() => {
            let currentTop = parseFloat(snowflake.style.top);
            if (currentTop >= window.innerHeight - 10) {
                clearInterval(fallInterval);
                snowflake.remove();
                return;
            }
            snowflake.style.top = currentTop + Math.random() * 3 + 2 + "px";

            // 让雪花积累在文字上
            snowTextElements.forEach(text => {
                let textRect = text.getBoundingClientRect();
                let flakeRect = snowflake.getBoundingClientRect();

                if (
                    flakeRect.bottom >= textRect.top &&
                    flakeRect.left >= textRect.left &&
                    flakeRect.right <= textRect.right
                ) {
                    clearInterval(fallInterval);
                    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
                    snowflake.style.filter = "blur(2px)";
                    snowflake.style.top = textRect.top + Math.random() * 5 + "px"; // 随机堆积
                    text.appendChild(snowflake); // 让雪花留在文字上
                }
            });
        }, 30);

        setTimeout(() => {
            snowflake.remove();
        }, 7000); // 移除超时雪花
    }

    setInterval(createSnowflake, 100);
});
document.addEventListener('DOMContentLoaded', function () {
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      
      // 随机设置雪花大小：2px ~ 6px
      const size = Math.random() * 4 + 2;
      snowflake.style.width = size + 'px';
      snowflake.style.height = size + 'px';
      
      // 随机生成水平位置
      const posX = Math.random() * window.innerWidth;
      snowflake.style.left = posX + 'px';
      
      // 随机动画时长：5~10秒
      const duration = Math.random() * 5 + 5;
      snowflake.style.animationDuration = duration + 's';
      
      // 添加到页面中
      document.body.appendChild(snowflake);
      
      // 动画结束后移除雪花，避免页面积累
      setTimeout(() => {
        snowflake.remove();
      }, duration * 1000);
    }
    
    // 每隔100ms生成一个雪花（可根据需要调整频率）
    setInterval(createSnowflake, 100);
  });

document.addEventListener('DOMContentLoaded', function() {
    // Select the element with the class 'couldnt-tell'
    const couldntTellText = document.querySelector('.couldnt-tell');
    
    // Add an event listener to it
    couldntTellText.addEventListener('click', function() {
        // Redirect to a new URL when clicked
        window.location.href = "file:///Users/jyoti/Desktop/SNOWY%20NIGHT/page2/page2.html";  // Change this URL to the destination you want
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 创建自定义光标
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // 跟随鼠标移动
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // 你可以根据需要调整大小和发光效果
});


