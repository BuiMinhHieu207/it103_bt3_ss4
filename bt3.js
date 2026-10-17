// solution_ex7.js

// 1. Khai báo các hằng số tài chính
const BASE_PRICE = 30000; // Giả định giá cơ bản là 30.000 VNĐ
const SURCHARGE_M = 6000;
const SURCHARGE_L = 10000;
const PRICE_TOPPING = 8000;
const DISCOUNT_RATE = 0.9; // Chiết khấu 10%
const MAX_CUPS_ALLOWED = 5;

let totalShiftRevenue = 0;
let validCupsCount = 0;

// Chuỗi giả lập order: 
// Cà phê Size M 2 Topping Hạng Vàng (CM2V)
// Trà Size S 0 Topping Hạng Thường (TS0N)
// Hủy món (X---)
// Cà phê Size L 1 Topping Hạng Vàng (CL1V)
// Sinh tố Size M 3 Topping Hạng Thường (SM3N)
// Trà Size L 2 Topping Hạng Thường (TL2N)
// Cà phê Size S 1 Topping Hạng Vàng (CS1V) - Ly thứ 6 sẽ bị bỏ qua do giới hạn 5 ly
const currentOrderStr = "CM2VTS0NX000CL1VSM3NTL2NCS1V";

console.log("========================================");
console.log("    BÁO CÁO DOANH THU CA PHỤC VỤ      ");
console.log("========================================");

// 2. Kiểm tra chuỗi rỗng và độ dài chuỗi không chia hết cho 4
if (!currentOrderStr || currentOrderStr.trim() === "" || currentOrderStr.length % 4 !== 0) {
    console.error("LỖI: Dữ liệu đơn hàng không hợp lệ (chuỗi rỗng hoặc độ dài không chia hết cho 4)!");
} else {
    // 3. Vòng lặp duyệt từng block 4 ký tự
    for (let i = 0; i < currentOrderStr.length; i += 4) {
        // Tách chuỗi 4 ký tự
        const drinkType = currentOrderStr[i];
        const size = currentOrderStr[i + 1];
        const toppingCount = parseInt(currentOrderStr[i + 2], 10);
        const memberStatus = currentOrderStr[i + 3];

        let currentBlock = currentOrderStr.substring(i, i + 4);

        // Lệnh continue: Bỏ qua nếu là món bị hủy (Mã 'X')
        if (drinkType === "X") {
            console.log(`[Bỏ qua] Mã order "${currentBlock}": Khách hủy món.`);
            continue;
        }

        // 4. Tính toán tài chính
        let cupBillAmount = BASE_PRICE;
        let surchargeSize = 0;

        // Tính phụ thu kích cỡ
        if (size === "M") {
            surchargeSize = SURCHARGE_M;
        } else if (size === "L") {
            surchargeSize = SURCHARGE_L;
        }
        cupBillAmount += surchargeSize;

        // Tính tiền topping
        let toppingCost = toppingCount * PRICE_TOPPING;
        cupBillAmount += toppingCost;

        // Áp dụng chiết khấu thành viên Vàng
        let isDiscountApplied = false;
        if (memberStatus === "V") {
            cupBillAmount = cupBillAmount * DISCOUNT_RATE;
            isDiscountApplied = true;
        }

        // Cập nhật biến trạng thái
        totalShiftRevenue += cupBillAmount;
        validCupsCount++;

        // In chi tiết ly
        console.log(`Ly ${validCupsCount} - Mã "${currentBlock}":`);
        console.log(`> Tiền cơ bản + Size + Topping: ${(BASE_PRICE + surchargeSize + toppingCost).toLocaleString("vi-VN")} VNĐ`);
        if (isDiscountApplied) {
            console.log(`> Chiết khấu: Giảm 10% (Thành viên Vàng)`);
        }
        console.log(`> Thành tiền: ${cupBillAmount.toLocaleString("vi-VN")} VNĐ`);
        console.log("----------------------------------------");

        // Lệnh break: Dừng hoàn toàn nếu đã đạt 5 ly hợp lệ
        if (validCupsCount === MAX_CUPS_ALLOWED) {
            console.log(`[Thông báo] Đã đạt giới hạn phục vụ ${MAX_CUPS_ALLOWED} ly hợp lệ. Ngừng nhận order tiếp theo.`);
            break;
        }
    }

    // In tổng kết
    console.log(`TỔNG SỐ LY HỢP LỆ ĐÃ PHỤC VỤ: ${validCupsCount}`);
    console.log(`TỔNG DOANH THU THỰC THU: ${totalShiftRevenue.toLocaleString("vi-VN")} VNĐ`);
    console.log("========================================");
}
