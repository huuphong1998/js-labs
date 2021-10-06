// Format số giây luôn hiển thị 2 chữ số
// Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có 2 chữ số của số giây
// Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp, mình đảm bảo luôn show 2 chữ số, dù số giờ
// phút giây chỉ có một chữ số
// Ví dụ:
// formatSeconds(0) --> '00'
// formatSeconds(9) --> '00'
// formatSeconds(20) --> '20'

// Cách 1: if...else
function formatSecondsV1(seconds) {
    if (seconds < 0 || seconds > 60) return -1;

    return `${seconds}`.padStart(2, '0');
}
console.log(formatSecondsV1(9));

// Cách 2: slice()
function formatSecondsV2(seconds) {
    if (seconds < 0 || seconds > 60) return -1;

    return `0${seconds}`.slice(-2);
}
console.log(formatSecondsV2(1));

/*-----------------------------------------------------------------------------------------------------------------*/

// Viết hàm formatTime(seconds) nhận vào là số giây seconds với (0 <= seconds <= 86400)
// Trả về là một chuỗi với định dạng hh:mm:ss trong đó:
// hh là số giờ
// mm là số phút
// ss là số giây
// hh, mm, ss luôn luôn hiển thị 2 chữ số kể cả nhỏ hơn 10
// Ví dụ:
// fotmatTime(0) --> '00:00:00'
// fotmatTime(9) --> '00:00:09'
// fotmatTime(4256) --> '01:10:56'

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
    if (seconds < 0 || seconds > 86400) return -1;

    const convertSeconds = (seconds % SECONDS_PER_MIN).toString().padStart(2, '0');
    const convertMinutes = Math.floor((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN)
        .toString()
        .padStart(2, '0');
    const convertHours = Math.floor(seconds / SECONDS_PER_HOUR)
        .toString()
        .padStart(2, '0');

    return `${convertHours}:${convertMinutes}:${convertSeconds}`;
}
console.log(formatTime(32472));
