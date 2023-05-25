const local = {
  baseApi: "http://localhost:8080",
  // baseApi: "http://localhost:8080",
  secret: "PSBnGLQiL1wLltsaoCYLCib4VZMh4ICwUJ4HGTUTsuY=",
  iv: "KmL72fgPIjymTQov9RBIjA==",
  apiKey: "JRRmZBM0MdNYljlvnZqfFuodIjaU+gMQVxiF/a2kVj8=",
};

const dev = {
  baseApi: "https://acb-api-dev.jventures.co.th",
  secret: "PSBnGLQiL1wLltsaoCYLCib4VZMh4ICwUJ4HGTUTsuY=",
  iv: "KmL72fgPIjymTQov9RBIjA==",
  apiKey: "JRRmZBM0MdNYljlvnZqfFuodIjaU+gMQVxiF/a2kVj8=",
};

const sit = {
  baseApi: "https://acb-api-sit.jventures.co.th",
  secret: "PSBnGLQiL1wLltsaoCYLCib4VZMh4ICwUJ4HGTUTsuY=",
  iv: "KmL72fgPIjymTQov9RBIjA==",
  apiKey: "JRRmZBM0MdNYljlvnZqfFuodIjaU+gMQVxiF/a2kVj8=",
};

const prod = {
  baseApi: process.env.REACT_APP_ACB_BO_API_URL,
  secret: process.env.REACT_APP_ACB_SECRET,
  iv: process.env.REACT_APP_ACB_IV,
  apiKey: process.env.REACT_APP_ACB_API_KEY,
};

let appConfig;

switch (process.env.REACT_APP_ENV) {
  case "prod":
    appConfig = prod;
    break;
  case "sit":
    appConfig = sit;
    break;
  case "local":
    appConfig = local;
    break;
  case "dev":
    appConfig = dev;
    break;
  default:
    appConfig = local;
    break;
}

const config = {
  // default config
  other: 1,
  //
  ...appConfig,
};

export default config;
