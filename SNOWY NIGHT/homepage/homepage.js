let snowInterval;

document.querySelector(".title").addEventListener("mouseenter", function() {
    startSnowfall();
});

document.querySelector(".title").addEventListener("mouseleave", function() {
    stopSnowfall();
});

function startSnowfall() {
    if (snowInterval) return; // 避免重复触发
    snowInterval = setInterval(() => {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        document.body.appendChild(snowflake);
        
        // 随机初始位置
        let startPositionX = Math.random() * window.innerWidth;
        let duration = Math.random() * 3 + 2; // 2-5秒落下

        snowflake.style.left = `${startPositionX}px`;
        snowflake.style.animationDuration = `${duration}s`;

        // 设定雪点的大小
        let size = Math.random() * 4 + 2; // 2px - 6px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // 一定时间后删除雪点
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }, 100); // 每 100ms 生成一个雪花
}

function stopSnowfall() {
    clearInterval(snowInterval);
    snowInterval = null;
}
document.addEventListener("DOMContentLoaded", function () {
    const moon = document.querySelector(".moon");

});
// Add event listener for clicking the "Snowy Night" title
document.getElementById("snowyTitle").addEventListener("click", function() {
    // Replace with the URL you want to navigate to
    window.location.href = "file:///Users/jyoti/Desktop/SNOWY%20NIGHT/page1/page1.html"; // This will redirect to a new website
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


