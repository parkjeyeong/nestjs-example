module.exports = {
  apps : [{
    name: 'nestjs-pm2',      // 프로세스 이름
    script: 'dist/main.js',  // 프로젝트 시작점
    watch: false,            // true, false, ['./api', './services']
    exec_mode: 'cluster',    // 실행모드 : fork(기본값), cluster
    instances: 'MAX',        // cluster 모드 실행 시 인스턴스 개수 : 1, 2, ..., 'MAX'
    // wait_ready: true,     // Node.js 앱으로부터 앱이 실행되었다는 신호를 직접 받겠다는 의미
    listen_timeout: 50000,   // 앱 실행 신호까지 기다릴 최대 시간. ms 단위.
    kill_timeout: 5000,      // 새로운 프로세스 실행이 완료된 후 예전 프로세스를 교체하기까지 기다릴 시간
    time: true               // pm2 log 에서 콘솔들의 입력 시간 확인 가능
  }],
  /**
   * 원격 배포 옵션
   */
  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};