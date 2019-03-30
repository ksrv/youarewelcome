class Env {
  get isDevelopment () {
    return process.env.NODE_ENV == 'development';
  }

  get isProduction () {
    return process.env.NODE_ENV == 'production';
  }

  get CurrentAPI () {
    return 'http://127.0.0.1:8044/api';
  }
};

const env = new Env();

export default env;
