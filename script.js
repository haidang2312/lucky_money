document.getElementById('envelope').addEventListener('click', function() {
    // Rung lắc bao lì xì
    this.classList.add('shake');
    setTimeout(() => {
        this.classList.remove('shake');
    }, 500);

    // Hiện đồng xu
    const coinsContainer = document.getElementById('coins');
    coinsContainer.innerHTML = ''; // Xóa đồng xu cũ
    coinsContainer.style.display = 'block';

    // Chọn một giá trị duy nhất từ 4 giá trị với xác suất đã cho
    const values = [10000, 20000, 50000, 100000];
    const probabilities = [0.6, 0.35, 0.04, 0.01]; // Xác suất tương ứng

    function getRandomValue() {
        let random = Math.random();
        let cumulative = 0;
    
        // Lặp qua mảng xác suất và giá trị
        for (let i = 0; i < values.length; i++) {
            cumulative += probabilities[i];
            if (random < cumulative) {
                return values[i];
            }
        }
    
        return values[0]; // Mặc định trả về giá trị thấp nhất (10000) nếu không trúng vào bất kỳ xác suất nào
    }

    // Chọn giá trị ngẫu nhiên duy nhất cho tổng tiền
    const totalAmount = getRandomValue();

    // Hiện thông điệp rút gọn
    const message = document.getElementById('message');
    message.innerText = `Bạn đã nhận được ${totalAmount.toLocaleString()} VNĐ`;
    message.style.display = 'block';

    // Tạo đồng xu theo số lượng ngẫu nhiên (không cần phải cộng dồn nữa)
    const numberOfCoins = Math.floor(Math.random() * 20) + 10; // Số lượng đồng xu ngẫu nhiên
    for (let i = 0; i < numberOfCoins; i++) {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        coin.style.left = Math.random() * 200 + 'px';
        coin.style.top = Math.random() * 100 + 'px'; // Vị trí ngẫu nhiên cho đồng xu
        coinsContainer.appendChild(coin);

        // Thêm hiệu ứng rơi cho đồng xu
        setTimeout(() => {
            coin.style.animation = 'fall 1s forwards';
        }, i * 100); // Thời gian rơi khác nhau cho mỗi đồng xu
    }
});
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});