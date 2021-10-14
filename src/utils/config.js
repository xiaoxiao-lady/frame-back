const nodeEnv = process.env.NODE_ENV;
let config = {};
if (nodeEnv === "production") {
  config = {
    // apiRoot: '/api',
    // apiRoot: `${location.protocol}//${location.hostname}:8205/cdss`
    apiRoot: "https://api-gateway.guahao.cn/ai-prescription-web"
  };
} else if (nodeEnv === "development") {
  config = {
    apiRoot:
      //  "https://api-gateway.guahao.cn/ai-prescription-web"
      // "https://union-gateway-service-qa1.guahao-test.com/ai-prescription-web-qa1"
      // apiRoot:
      "http://union-gateway-service-qa1.guahao-test.com/ai-prescription-web-dev1"
    // apiRoot:
    // "http://yapi.guahao.cn/mock/5253"
    // apiRoot: 'http://cdss-chronic-web-qa2.guahao-test.com/cdss',
    // apiRoot: '/api',
  };
} else if (nodeEnv === "test") {
  config = {
    apiRoot:
      // "http://union-gateway-service-qa1.guahao-test.com/ai-prescription-web-dev1"
      "https://union-gateway-service-qa1.guahao-test.com/ai-prescription-web-qa1"
  };
} else {
  config = {
    apiRoot:
      "https://union-gateway-service-qa1.guahao-test.com/ai-prescription-web-stable"
  };
}

export default config;
