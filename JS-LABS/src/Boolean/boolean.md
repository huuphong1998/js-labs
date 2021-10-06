-   Type conversion và type coercion:

*   Giống nhau: đều chuyển đổi dữ liệu từ kiểu này sang kiểu khác
*   Type coercion là ép kiểu tự động (ép kiểu ngầm)
*   Type conversion mang ý nghĩa là có thể là ép kiểu tự động như type coersion hoặc ép kiểu tường minh (explicit, tức là do mình chỉ định nó ép kiểu)
*   3 kiểu type conversion phổ biến: String Conversion (.toString() or String()), Numeric Conversion (parseInt(), parseFloat() or Number(), Boolean Conversion (! operator or Boolean()) )

-   Truthy và Falsy:

*   Truthy: là những giá trị khi chuyển đổi về boolean thì sẽ được giá trị true
*   Falsy: là những giá trị khi chuyển đổi về boolean thì sẽ được giá trị false

-   So sánh:

*   Ký tự lớn hơn số
*   Ký tự thường lớn hơn ký tự hoa

-   So sánh null với undefined

*   null chỉ == với undefined nhưng không bằng với bất cứ giá trị nào cả
*   null === undefined // true
*   null >= 0 //true
