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

    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Increased snowflake size (larger snowflakes)
        let size = Math.random() * 8 + 4; // Snowflake size between 4px and 12px
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
            snowflake.style.top = currentTop + Math.random() * 8 + 6 + "px"; // Faster fall

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
        }, 15); // Faster interval (more frequent snowflakes)

        setTimeout(() => {
            snowflake.remove();
        }, 7000); // Remove snowflake after 7 seconds
    }

    // Decrease interval to make snowflakes more frequent (higher density)
    setInterval(createSnowflake, 30); // More frequent snowflake creation for denser snowfall
});

document.addEventListener('DOMContentLoaded', function () {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Snowflake size between 4px and 12px
        const size = Math.random() * 8 + 4; // Larger snowflakes
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        
        // Random horizontal position
        const posX = Math.random() * window.innerWidth;
        snowflake.style.left = posX + 'px';
        
        // Random animation duration (5-10 seconds)
        const duration = Math.random() * 5 + 5;
        snowflake.style.animationDuration = duration + 's';
        
        // Add snowflake to the page
        document.body.appendChild(snowflake);
        
        // Remove snowflake after animation
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
    
    // Increase frequency of snowflakes to increase density
    setInterval(createSnowflake, 30); // Create snowflakes more frequently for higher density
});

document.addEventListener('DOMContentLoaded', function() {
    const couldntTellText = document.querySelector('.world ');
    
    couldntTellText.addEventListener('click', function() {
        window.location.href = "file:///Users/jyoti/Desktop/SNOWY%20NIGHT/page5/page5.html";  // Update the path
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

