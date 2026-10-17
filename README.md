BÁO CÁO PHÂN TÍCH & THIẾT KẾ
1. Xác định Input / Output
Input: Chuỗi ký tự (String) chứa thông tin các ly đồ uống được gọi. Mỗi ly được mã hóa bởi một chuỗi con cố định gồm 4 ký tự:

Ký tự 1: Loại đồ uống (VD: C - Cà phê, T - Trà, X - Hủy món).

Ký tự 2: Kích cỡ / Size (S, M, L).

Ký tự 3: Số lượng topping (từ 0 đến 9).

Ký tự 4: Hạng thành viên (V - Vàng, N - Thường).

Ví dụ: "CM2V" (Cà phê, size M, 2 topping, thành viên Vàng).

Output:

Thông báo lỗi nếu đầu vào không hợp lệ.

Chi tiết doanh thu của từng ly hợp lệ.

Tổng doanh thu cuối cùng của toàn bộ phiên giao dịch.

2. Các biến trạng thái tài chính
BASE_PRICE: Đơn giá cơ bản của một ly đồ uống (Giả định: 30.000 VNĐ).

surchargeSize: Phụ thu theo kích cỡ đồ uống (M: +6.000 VNĐ, L: +10.000 VNĐ).

toppingCost: Tổng tiền topping của 1 ly (Số lượng × 8.000 VNĐ).

cupBillAmount: Thành tiền của từng ly sau khi cộng phụ thu, topping và trừ chiết khấu.

totalShiftRevenue: Tổng doanh thu tích lũy của toàn ca/phiên.

3. Thuật toán tuần tự
Kiểm tra tính hợp lệ của Input: Xác nhận chuỗi không rỗng và tổng số ký tự phải chia hết cho 4. Nếu vi phạm, báo lỗi và dừng chương trình.

Khởi tạo biến trạng thái: totalShiftRevenue = 0 và validCupsCount = 0.

Duyệt chuỗi (Vòng lặp for với bước nhảy là 4):

Cắt 4 ký tự để xác định thông tin của 1 ly đồ uống.

Kiểm tra loại đồ uống. Nếu là X (Hủy), kích hoạt continue để bỏ qua.

Tính giá trị cơ bản + Phụ thu size (Size M hoặc L) + (Số lượng topping × 8.000).

Kiểm tra hạng thành viên. Nếu là V, nhân tổng tiền ly đó với 0.9 (giảm 10%).

Cộng tiền ly vào totalShiftRevenue, tăng validCupsCount thêm 1.

Kiểm tra giới hạn phục vụ: Nếu validCupsCount đạt giới hạn (5 ly), kích hoạt break để thoát vòng lặp.

Xuất báo cáo: In ra tổng doanh thu thu được.

4. Giải thích cơ chế break và continue
continue: Được sử dụng khi gặp ký tự loại đồ uống là X (Khách hủy món hoặc lỗi). Lệnh này sẽ lập tức ngắt việc tính toán tiền cho nhóm 4 ký tự hiện tại và nhảy sang nhóm 4 ký tự tiếp theo trong vòng lặp.

break: Được kích hoạt khi số lượng ly đồ uống hợp lệ đã phục vụ đạt đúng 5 ly. Lệnh này sẽ kết thúc hoàn toàn vòng lặp, bỏ qua mọi chuỗi ký tự đơn hàng còn sót lại chưa xử lý và tiến tới bước in tổng kết doanh thu.
