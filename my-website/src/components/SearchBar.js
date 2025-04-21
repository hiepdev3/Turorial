import React, { useState } from 'react';
import './SearchBar.css'; // 👈 bạn tạo file này để viết CSS riêng

const options = {
  'Hướng dẫn sử dụng tài liệu': '/',
  'Hướng dẫn tạo tài khoản': '/tutorial-basics/create-account',
  'Hướng dẫn nạp tiền': '/tutorial-basics/deposit-money',
  'Hướng dẫn thanh toán': '/tutorial-basics/payment-guide',
  'Hướng dẫn mua hàng siêu tốc không cần tài khoản': '/tutorial-basics/quick-purchase',
  'Quản lý đơn hàng': '/tutorial-basics/order-management',
  'Ưu đãi cho khách hàng mới': '/tutorial-basics/customer-offers',
  'Chính sách VIP': '/tutorial-basics/vip-policy',
  'Chương trình giới thiệu bạn bè': '/tutorial-basics/referral-program',
  'Điều khoản dịch vụ': '/tutorial-basics/terms-of-service',
  'Chính sách bảo mật': '/tutorial-basics/privacy-policy',
  'Hướng dẫn tạo mã đăng nhập ChatGPT': '/tutorial-basics/create-chatgpt-login',
  'Hướng dẫn tạo mã khóa Netflix': '/tutorial-basics/create-netflix-key',
  'Hướng dẫn tạo tài khoản Gmail': '/tutorial-basics/create-gmail-account',
  'Hướng dẫn bật xác thực 2 lớp trên Discord': '/tutorial-basics/enable-2fa-discord',
  'Hướng dẫn liên kết email và tạo mật khẩu riêng cho tài khoản Spotify': '/tutorial-basics/link-email-spotify',
  'Hướng dẫn thay đổi quốc gia tài khoản Google/YouTube về Việt Nam': '/tutorial-basics/change-country-google',
  'Cách kiểm tra tài khoản Google đã tham gia Family chưa': '/tutorial-basics/check-google-family',
  'Hướng dẫn xóa Family Google khi có thành viên dưới 15 tuổi': '/tutorial-basics/remove-google-family',
  'Hướng dẫn rời khỏi Family Google': '/tutorial-basics/leave-google-family',
  'Hướng dẫn cài đặt và sử dụng sản phẩm': '/tutorial-basics/setup-product',
  'Thông tin bảo hành chung': '/tutorial-basics/general-warranty-info',
  'Chính sách bảo hành Netflix, Spotify, YouTube': '/tutorial-basics/warranty-netflix-spotify-youtube',
  'Hướng dẫn cài đặt và sử dụng AnyDesk': '/tutorial-basics/setup-anydesk',
  'Hướng dẫn cài đặt và sử dụng TeamViewer': '/tutorial-basics/setup-teamviewer',
  'Hướng dẫn cài đặt và sử dụng Chrome Remote Desktop trên macOS': '/tutorial-basics/setup-chrome-remote-desktop',
  'Hướng dẫn chuyển thiết kế Canva': '/tutorial-basics/transfer-canva-design',
  'Hướng dẫn tải Windows/Office chính hãng từ Microsoft': '/tutorial-basics/download-windows-office',
  'Hướng dẫn cài đặt Windows không cần USB': '/tutorial-basics/install-windows-no-usb',
  'Cách gỡ bỏ hoàn toàn Microsoft Office khỏi máy tính': '/tutorial-basics/remove-microsoft-office',
  'Hướng dẫn thoát tài khoản Netflix trên TV': '/tutorial-basics/logout-netflix-tv',
  'Hướng dẫn thay đổi ngôn ngữ trên Netflix': '/tutorial-basics/change-netflix-language',
  'Cách tải nhạc về nghe offline Spotify': '/tutorial-basics/download-offline-spotify',
  'Hướng dẫn chuyển dữ liệu giữa các tài khoản Google Drive': '/tutorial-basics/transfer-google-drive-data',
  'Hướng dẫn khắc phục lỗi Spotify mất Premium': '/tutorial-basics/fix-spotify-premium',
  'Hướng dẫn chuyển tài khoản Spotify': '/tutorial-basics/transfer-spotify-account',
  'Hướng dẫn tạo tài khoản iTunes US': '/tutorial-basics/create-itunes-us-account',
  'Cách chuyển playlist trên YouTube từ tài khoản này sang tài khoản khác': '/tutorial-basics/transfer-youtube-playlist',
  'Hướng dẫn chuyển kênh YouTube từ Gmail cũ sang Gmail mới': '/tutorial-basics/transfer-youtube-channel',
  'Cách chuyển danh sách kênh đã đăng ký từ tài khoản YouTube này sang tài khoản khác': '/tutorial-basics/transfer-youtube-subscriptions',
  'Kiểm tra Region của tài khoản Google': '/tutorial-basics/check-google-region',
};
export default function CustomSearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  
    if (value.trim() === '') {
      setFilteredOptions([]);
      setShowSuggestions(false);
      return;
    }
  
    // Chuyển đổi object `options` thành array các key (tiêu đề)
    const filtered = Object.keys(options).filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
  
    setFilteredOptions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setShowSuggestions(false);
  
    // Chuyển hướng đến URL tương ứng
    const url = options[value];
    if (url) {
      window.location.href = url; // Điều hướng đến URL
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={inputValue}
        onChange={handleChange}
        className="search-input"
      />
      {showSuggestions && filteredOptions.length > 0 && (
        <ul className="suggestions-list">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
