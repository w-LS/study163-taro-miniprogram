// 发现栏小程序主入口，「最近使用」列表（基础库2.2.4版本起包含「我的小程序」列表）
export const MAIN_ENTRY = 1001;
// 微信首页顶部搜索框的搜索结果页
export const HOME_TOP_SEARCH = 1005;
// 发现栏小程序主入口搜索框的搜索结果页
export const MAIN_ENTRANCE_TOP_SEARCH = 1006;

// 单人聊天会话中的小程序消息卡片
export const SINGLE_CHAT = 1007;
// 群聊会话中的小程序消息卡片
export const GROUP_CHAT = 1008;

// 扫描二维码
export const SCAN_QRCODE = 1011;
// 长按图片识别二维码
export const LONG_PRESS_PICTURE_QRCODE = 1012;
// 扫描手机相册中选取的二维码
export const PHONE_ALBUM_QRCODE = 1014;

// 小程序模板消息
export const TEMPLATE_MESSAGE = 1014;

// 前往小程序体验版的入口页
export const EXPERIENCE_VERSION_ENTRY = 1017;

// 微信钱包（微信客户端7.0.0版本改为支付入口）
export const WECHAT_WALLET = 1019;

// 公众号 profile 页相关小程序列表
export const PUBLIC_NUMBER_PROFILE_PAGE_RELATED = 1020;

// 聊天顶部置顶小程序入口（微信客户端6.6.1版本起废弃）
// const HOME_TOP_SEARCH = 1022

// 安卓系统桌面图标
export const ANDROID_DESKTOP = 1023;

// 小程序 profile 页
export const MINI_PROGRAM_PROFILE = 1024;

// 扫描一维码
export const SCAN_ONE_DIMENSIONAL_CODE = 1025;

// 发现栏小程序主入口，「附近的小程序」列表
export const NEARBY_MINI_PROGRAM = 1026;

// 微信首页顶部搜索框搜索结果页「使用过的小程序」列表
export const HOME_TOP_SEARCH_HISTORY = 1027;

// 我的卡包
export const MY_WALLET = 1028;

// 小程序中的卡券详情页
export const COUPON_DETAIL_PAGE = 1029;

// 长按图片识别一维码
export const LONG_PRESS_PICTURE_ONE_DIMENSIONAL_CODE = 1031;

// 扫描手机相册中选取的一维码
export const PHONE_ALBUM_ONE_DIMENSIONAL_CODE = 1032;


export const GROUP_CHAT_WITH_SHARE_TICKET = 1044;
// 微信聊天主界面下拉，「最近使用」栏（基础库2.2.4版本起包含「我的小程序」栏）
export const HOME_PULLDOWN_MINI_PROGRAM = 1089;
// 未完待续..

export const INITIALIZE_ENTRY = [
  MAIN_ENTRY,
  HOME_TOP_SEARCH,
  MAIN_ENTRANCE_TOP_SEARCH,
  MINI_PROGRAM_PROFILE,
  NEARBY_MINI_PROGRAM,
  HOME_TOP_SEARCH_HISTORY,
  HOME_PULLDOWN_MINI_PROGRAM
];

export const MESSAGE_ENTRY = [
  SINGLE_CHAT,
  GROUP_CHAT,
  GROUP_CHAT_WITH_SHARE_TICKET,
  TEMPLATE_MESSAGE
];
