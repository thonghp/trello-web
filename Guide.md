# Về Dự Án

- Ban đầu code sẽ chạy vô **main.jsx > App.jsx > pages > components**
- File main.jsx sử dụng CssVarsProvider, CssBaseline, theme
    - CssBaseline để chuẩn hoá style, cài đặt css mặc định, xoá margin,...
    - CssVarsProvider dùng để cung cấp sử dụng css variable, ở đây ta sử dụng nó để sư dụng useColorScheme để làm mode theme
    - theme để cấu hình css global
- File App.jsx dùng để render giao diện    
- Pages chứa các phần giao diện con riêng biệt và giao diện tổng
    - Giao diện tổng chứa các giao diện con, nó là một container, container này sẽ có width và height full màn hình, xoá hết các padding
    - Giao diện con là các Box
- Components chứa các phần giao diện dùng chung, thường nó sẽ được gọi trong pages để sử dụng
