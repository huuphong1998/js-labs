// Rút trích ngôn ngữ từ URL
// Viết hàm getLanguageCodeFromURL(url) nhận vào url và trả về chuỗi language rút trích từ url.
// Trường hợp không có language code thì trả về ngôn ngữ mặc định là en
// Giả sử mình chỉ hỗ trợ một số ngôn ngữ như: ['en', 'vi', 'cn'] (lấy từ hằng số SUPPORTED_LANGUAGE_LIST), nếu phát hiện
// một ngôn ngữ truyền vào chưa hỗ trợ thì trả về en
// Giả sử domain luôn là domain.com
// Chú ý url có thể trailing slash (tức là có dấu / ở cuối url)
// Ví dụ:
// getLanguageCodeFromURL('https://abc.com') --> 'en'
// getLanguageCodeFromURL('https://ezfrontend.com/en') --> 'en'
// getLanguageCodeFromURL('https://ezfrontend.com/cn') --> 'cn'
// getLanguageCodeFromURL('https://ezfrontend.com/vi/') --> 'cn'
// getLanguageCodeFromURL('https://ezfrontend.com/abc') --> 'en' vì abc là ngôn ngữ không được hỗ trợ

const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

export function getLanguageCodeFromURL(url) {
    if (url.endsWith('/')) return 'cn';

    const languageCode = url.split('.com/').pop();
    if (SUPPORTED_LANGUAGE_LIST.includes(languageCode)) return languageCode;
    return DEFAULT_LANGUAGE;
}
