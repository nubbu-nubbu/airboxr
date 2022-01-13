const { execSync } = require('child_process');

console.log('PREPARING ENV', process.argv);

if (process.argv[2] === 'production') {
  console.log(`cd ${__dirname} && rm .env && cp .env.production .env`);
  execSync(`cd ${__dirname} && rm .env && cp .env.production .env`);
  execSync(`cat .env`);
} else if (process.argv[2] === 'test') {
  console.log(`cd ${__dirname} && rm .env && cp .env.test .env`);
  execSync(`cd ${__dirname} && rm .env && cp .env.test .env`);
  execSync(`cat .env`);
} else {
  console.log(`cd ${__dirname} && rm .env && cp .env.dev .env`);
  execSync(`cd ${__dirname} && rm .env && cp .env.dev .env`);
  execSync(`cat .env`);
}