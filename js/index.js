const images = document.querySelectorAll('.slideshow-image');
    let currentIndex = 0;

    function showNextImage() {
        images.forEach(image => { image.style.display = 'none'; });
        images[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(showNextImage, 3000);
    document.addEventListener('DOMContentLoaded', function () {
    var nameProducts = ["Máy hút bụi giường nệm diệt khuẩn đa năng ", "Quần jean nam", "Băng cao su non", "Thức ăn cho mèo","Bóng đèn led","Bông tẩy trang 240 miếng","KING COFFE 3IN1","Quần short nam thể thao","Đầm body nữ dáng xòe nhẹ xinh xắn","Sữa Dưỡng Thể Trắng Da Vaseline","Miếng Lót Chuột Delux","Đèn năng lượng mặt trời","Combo 2 chai dầu gội đầu","Combo 10 gói Pate cho mèo","Thanh xốp tránh va đập",
                            "Trà dạ dạy đại tràng","Bộ vòi hoa sen tăng áp","10 tấm xốp dán tường","Đèn trụ nhôm công suất 50w - 100w","Combo 2 túi cà phê đen đá","ÁO KHOÁC HOODIE NAM NỮ","Bếp gas du lịch mini","Sữa tăm THEBOL","Đèn xe đạp thể thao siêu sáng",
                            "Gel dưỡng ẩm kiềm dầu","Tất nam cao cấp","Bộ 10 đôi đũa hợp kim mạ vàng","Combo set 2 chiếc vợt cầu lông","Son lì không trôi, son nữ","Combo 2 hộp bơ thượng hạng Golden","Đồ chơi xe ô tô cứu hỏa","Cháo tươi Deli SG Food","500g Hạt Điều Sạch Vỏ Nguyên Hạt","Lưới đánh cá","Xi Nước Đánh Bóng Giày","Thạch hoa hồng dưỡng ẩm","Set 5 hộp đựng bảo quản thực phẩm","Ví bóp nam","Bộ 3 hộp giữ nhiệt",
                            "Quạt đeo cổ","Trà lá ối hộp 30","Cafe nấm linh chi","Đuôi đèn dây lò xo","Sữa tắm dưỡng ẩm","Khô ức cá dứa","100 cành kẽm nhung","Thung sữa chua uống Probi","Viên uống trắng da","Nước hoa hồng không mùi","máy xay sinh tố Mini","Đồng hồ thông minh","Kem chống nắng Nhật dạng gel","10gr Hoa đậu biết xấy khô","Băng vệ sinh UUcare","Cáp sạc","Bộ dán bảo kệ camera điện thoại","Sữa tắm gội hương nước hoa cao cấp","Kem đánh răng dược liệu Ngọc Châu","Cọ vệ sinh ly nước","Áo cổ tròn tay ngắn",
                            "Son môi không chì-Son lụa cỏ mềm","Combo 20 mặt nạ ngủ rau má","Bộ đồ bé gái chất liệu thun dày mịn","Kem dưỡng ẩm","Máy hút bụi","THẢM LÔNG TRẢI SÀN","Cafe Culi","Sa tế Hội An 100gr","Combo 3 lon Snack","Bộ đồ nữ thu đông","Sáp wax lông ngọc trai","Muối tôm Như Ý thượng hạng","Nồi nấu đa năng","Sáp vuốt tóc nam","Bình giữ nhiệt","Máy xấy tốc mini","Viên khăn giấy nén mini",
                            "Gói mì tươi không vị Udon","Combo 9 viên tẩy bồn cầu","1kg cà phê Arabica","Set 1 túi màng bọc thực phẩm","Máy đồng hồ Nhật kim trôi","Sửa tắm Romano Classic","Dầu khô đa năng huơng hoa","Serum chống nắng","Ổ cắm điện","Giày lười","Chuôt không dây Logitech","Khăn bông lau bếp","Đồng hồ treo tường","Tẩy tế bào chết quế hồi cà phê","Sữa tắm nước hoa Nhật Bản","1kg cơm cháy chiên mắm",
                            "Bộ 6 khẩu trang dành cho bé","Serum trắng da ngừa mụn","Cường lực KINGKONG","Tai nghe nhét tai có dây","Viên uống kẽm","Vòi hoa sen tăng áp cao cấp","Kem bôi mờ sẹo","Yieku 2022 mùa xuân"];
    var productList = document.getElementById('productList');
    var limit = 15;
    var productsCreated = 0;


    for (var i = productsCreated; i < productsCreated + limit && i < 48; i++) { 

        var li = document.createElement('li');

        var img = document.createElement('img');
        img.src = '../images/product' + (i + 1) + '.webp';
        img.alt = 'product ' + (i + 1);
        img.setAttribute('onclick', 'redirectToProductDetail(' + (i + 1) + ')');

        var productDetails = document.createElement('div');
        productDetails.className = 'product-details';

        var h3 = document.createElement('h3');
        h3.textContent = nameProducts[i];
        h3.className = 'product-name'; 

        var price = document.createElement('p');
        price.textContent = 'Giá: $' + Math.floor(Math.random() * 150) + 50;

        var quantity = document.createElement('p');
        quantity.textContent = 'Số lượng: ' + Math.floor(Math.random() * 10) + 1;

        var rating = document.createElement('p');
        var stars = '★'.repeat(Math.floor(Math.random() * 5) + 1) + '☆'.repeat(5 - Math.floor(Math.random() * 5));
        rating.textContent = 'Đánh giá: ' + stars;

        productDetails.appendChild(h3);
        productDetails.appendChild(price);
        productDetails.appendChild(quantity);
        productDetails.appendChild(rating);

        li.appendChild(img);
        li.appendChild(productDetails);

        productList.appendChild(li);
    }
    productsCreated += limit;

})
function redirectToProductDetail(productId) {
    // Chuyển hướng đến trang chi tiết sản phẩm với productId
    window.location.href = 'product_detail.html?id=' + productId;
}

function redirectToProductDetail(productId) {
    // Chuyển hướng đến trang chi tiết sản phẩm với productId
    window.location.href = 'product_detail.html?id=' + productId;
}
let isDragging = false;
let offset = { x: 0, y: 0 };

document.getElementById('openChat').addEventListener('click', function() {
    document.getElementById('chatBox').style.display = 'block';
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatBox').style.display = 'none';
});

const chatBox = document.getElementById('chatBox');

chatBox.addEventListener('mousedown', function(e) {
    isDragging = true;
    offset.x = chatBox.offsetLeft - e.clientX;
    offset.y = chatBox.offsetTop - e.clientY;
    chatBox.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        chatBox.style.left = `${e.clientX + offset.x}px`;
        chatBox.style.top = `${e.clientY + offset.y}px`;
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    chatBox.style.cursor = 'grab';
});

