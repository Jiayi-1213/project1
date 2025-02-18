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

        let size = Math.random() * 4 + 2; // Snowflake size remains between 2px and 6px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = "-10px"; // Start just above the viewport
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;

        document.body.appendChild(snowflake);

        let fallInterval = setInterval(() => {
            let currentTop = parseFloat(snowflake.style.top);
            if (currentTop >= window.innerHeight - 10) {
                clearInterval(fallInterval);
                snowflake.remove();
                return;
            }
            // Increase the falling speed here
            snowflake.style.top = currentTop + Math.random() * 6 + 4 + "px"; // Increase range (faster fall)

            // Accumulation on text elements
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
                    snowflake.style.top = textRect.top + Math.random() * 5 + "px"; // Accumulate snowflakes on text
                    text.appendChild(snowflake);
                }
            });
        }, 20); // Decrease interval to increase frequency

        setTimeout(() => {
            snowflake.remove();
        }, 7000); // Remove snowflake after 7 seconds
    }

    // Decrease interval to make snowflakes more frequent (higher density)
    setInterval(createSnowflake, 50); // Increase the frequency of snowflakes
});

document.addEventListener('DOMContentLoaded', function () {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Snowflake size remains between 2px and 6px
        const size = Math.random() * 4 + 2;
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        
        // Random horizontal position
        const posX = Math.random() * window.innerWidth;
        snowflake.style.left = posX + 'px';
        
        // Random animation duration (5-10 seconds)
        const duration = Math.random() * 5 + 5;
        snowflake.style.animationDuration = duration + 's';
        
        // Add to the page
        document.body.appendChild(snowflake);
        
        // Remove snowflake after animation
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
    
    // Increase frequency of snowflakes to increase density
    setInterval(createSnowflake, 50); // Snowflakes are created every 50ms for higher density
});

document.addEventListener('DOMContentLoaded', function() {
    const couldntTellText = document.querySelector('.darktrees');
    
    couldntTellText.addEventListener('click', function() {
        window.location.href = "file:///Users/jyoti/Desktop/SNOWY%20NIGHT/page4/page4.html";  // Update the path
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
