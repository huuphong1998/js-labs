-   Các props của Math

*   Math.PI: Giá trị của PI, khoảng 3.14159
*   Math.SQRT2: Giá trị của căn bậc 2 của 2 ~ 1.414

-   Method của Math

*   Math.ceil(x): Làm tròn lên số nguyên gần nhất
*   Math.floor(x): Làm tròn xuống số nguyên gần nhất
*   Math.round(x): Làm tròn tới số nguyên gần nhất
*   Math.trunc(x): Hàm lấy phần nguyên bỏ phần thập phân
*   Math.random(): Random số từ 0 --> 1
*   Math.abs(x): Lấy giá trị tuyệt đối
*   Math.pow(x, y): Hàm lũy thừa, x^y
*   Math.sqrt(x): Hàm căn bậc 2

-   Hai số thực được gọi là bằng nhau khi và chỉ khi giá trị tuyệt đối của 2 số thực đó nhỏ hơn hằng số EPSILON

*   c1: console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON)
*   c2: console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1))
