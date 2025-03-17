const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0].split(" ")[0]);
const k = Number(input[0].split(" ")[1]);
const MAX = 100000;
const visited = new Array(MAX + 1).fill(false);
const prev = new Array(MAX + 1).fill(-1); // 이전 위치 저장

function BFS() {
  let queue = [];
  queue.push(n);
  visited[n] = true;
  
  let cnt = 0;
  
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      
      // 목표 도착 시 즉시 반환
      if (x === k) return cnt;

      for (let nx of [x - 1, x + 1, x * 2]) {
        if (nx >= 0 && nx <= MAX && !visited[nx]) {
          visited[nx] = true;
          prev[nx] = x; // 이전 위치 저장
          queue.push(nx);
        }
      }
    }
    cnt++;
  }
}

function printPath(target) {
  let path = [];
  let current = target;

  while (current !== -1) {
    path.push(current);
    current = prev[current];
  }

  console.log(path.length - 1); // 이동 횟수 출력
  console.log(path.reverse().join(" ")); // 경로 출력
}

// BFS 실행 및 최단 거리 찾기
const ans = BFS();
printPath(k); // k(목표 위치)를 기반으로 경로 출력

