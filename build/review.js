// build/review.js
const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

const destDir = path.resolve(__dirname, '../.reviewboardrc');
let str = fs.readFileSync(destDir, 'utf-8');
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const oriBranch = str.match(/(?<=BRANCH\ =\ ").*(?=")/g)[0].trim();

const author = execSync('git show -s --format=%an').toString().trim();
const regArr = str.match(new RegExp(`(?<=REVIEW_ID_${author} = ").*(?=")`, 'g'));
let reviewId = null;
if (regArr) {
  reviewId = regArr[0];
}

if (oriBranch !== branch) {
  str = str.replace(new RegExp(oriBranch, 'g'), branch);
  fs.writeFileSync(destDir, str, 'utf-8');
}

exec(`rbt post -p -d ${oriBranch !== branch || !reviewId ? '' : `-r ${reviewId}`} --target-group=frontendgroup --target-people=jiangjw,yaojm,jiangyh,wupeng1,lixf2,sunyh1`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误: ${error}`);
    return false;
  }
  let id = null;
  if (oriBranch !== branch || !reviewId) {
    id = stdout.match(/(?<=rb.guahao-inc.com\/r\/)[0-9]+(?=\/diff)/g)[0];
    if (reviewId) {
      str.replace(`REVIEW_ID_${author} = "${reviewId}"`, `REVIEW_ID_${author} = "${id}"`);
    } else {
      str += `\nREVIEW_ID_${author} = "${id}"`;
    }
    fs.writeFileSync(destDir, str, 'utf-8');
  }
  console.log(`\nrb 提交成功， reviewId 为 ${id || reviewId}！`);
})