/*

[rewrite_local]
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/flomo.js
[MITM]
hostname = flomoapp.com
*/
var responseData = {
    "message": "",
    "data": {
      "id": 1337564,
      "apple_mac_subscription": null,
      "referee_pro_days": 9999,
      "register_via": "ios",
      "apple_subscription": null,
      "created_at": "2023-07-22 15:20:50",
      "wechat_nickname": null,
      "email_verified_at": "2023-07-22 15:20:50",
      "pro_expired_at": "2099-09-09 23:59:59",
      "api_token": "531d142cfccac81f6920bf0c7ba1ef72",
      "language": "zh",
      "slug": "MTMzNzU2NA",
      "google_play_subscription": null,
      "referer_id": null
    },
    "code": 0
  };

  $done({ body: JSON.stringify(responseData) });