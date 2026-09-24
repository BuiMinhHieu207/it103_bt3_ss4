// Cấu hình bảng giá và chính sách khuyến mãi
const PRICE_S = 35000;
const PRICE_M = 42000;
const PRICE_L = 48000;
const PRICE_T = 10000;
const DISCOUNT_THRESHOLD = 100000;
const DISCOUNT_RATE = 0.9; // Tương đương giảm 10% (nhân với 0.9)

const totalTables = 3;
let totalShiftRevenue = 0;

console.log("========================================");
console.log("    BÁO CÁO DOANH THU CA PHỤC VỤ      ");
console.log("========================================");

// Vòng lặp ngoài: Duyệt từng bàn phục vụ trong ca
for (let tableIndex = 1; tableIndex <= totalTables; tableIndex++) {
    let currentOrder = "";

    // Khởi tạo chuỗi gọi món cho từng bàn (không sử dụng mảng theo quy định cơ bản)
    switch (tableIndex) {
        case 1:
            currentOrder = "MLT";
            break;
        case 2:
            currentOrder = "SSX";
            break;
        case 3:
            currentOrder = "LLTT";
            break;
    }

    let tableBillAmount = 0;

    // Vòng lặp trong: Duyệt từng ký tự (món ăn) trong chuỗi gọi món của bàn hiện tại
    for (let charIndex = 0; charIndex < currentOrder.length; charIndex++) {
        const itemCode = currentOrder[charIndex];

        // Nếu khách hủy món (mã 'X'), sử dụng lệnh continue để bỏ qua và duyệt món tiếp theo
        if (itemCode === "X") {
            continue; 
        }

        // Cộng dồn tiền tương ứng với mã món
        switch (itemCode) {
            case "S":
                tableBillAmount += PRICE_S;
                break;
            case "M":
                tableBillAmount += PRICE_M;
                break;
            case "L":
                tableBillAmount += PRICE_L;
                break;
            case "T":
                tableBillAmount += PRICE_T;
                break;
            default:
                console.warn(`LỖI: Mã món '${itemCode}' tại bàn ${tableIndex} không hợp lệ!`);
                break;
        }
    }

    // Áp dụng chính sách giảm giá 10% nếu tổng hóa đơn bàn > 100.000 VNĐ
    let isDiscountApplied = false;
    let originalBill = tableBillAmount;
    
    if (tableBillAmount > DISCOUNT_THRESHOLD) {
        tableBillAmount = tableBillAmount * DISCOUNT_RATE;
        isDiscountApplied = true;
    }

    // Cộng dồn hóa đơn bàn vào tổng doanh thu ca làm việc
    totalShiftRevenue += tableBillAmount;

    // In chi tiết hóa đơn từng bàn ra Console
    console.log(`BÀN SỐ ${tableIndex} - Chuỗi Order: "${currentOrder}"`);
    if (isDiscountApplied === true) {
        console.log(`> Tạm tính: ${originalBill.toLocaleString("vi-VN")} VNĐ`);
        console.log(`> Chiết khấu: Áp dụng giảm 10% (Hóa đơn > 100K)`);
    } else {
        console.log(`> Chiết khấu: Không đủ điều kiện áp dụng`);
    }
    console.log(`> THÀNH TIỀN: ${tableBillAmount.toLocaleString("vi-VN")} VNĐ`);
    console.log("----------------------------------------");
}

// Báo cáo tổng kết toàn bộ ca làm việc
console.log(`TỔNG DOANH THU THỰC THU CA: ${totalShiftRevenue.toLocaleString("vi-VN")} VNĐ`);
console.log("========================================");
