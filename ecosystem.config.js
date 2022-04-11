module.exports = {
  apps : [{
    name: 'strangelogic',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      LOGLEVEL: 'debug',
      HTTP_PORT: 3000,
      JAMBONZ_ACCOUNT_SID: '5706c0bc-d527-4755-95d6-7a85ef51fc7d',
      JAMBONZ_API_KEY: '9622ce7b-5f2f-40c3-885e-583818e802c7',
      JAMBONZ_REST_API_BASE_URL: 'https://api.jambonz.us',
      WEBHOOK_SECRET: 'wh_secret_hVViJnWvRGvwMtYUUo4Lce',
    }
  }]
};
