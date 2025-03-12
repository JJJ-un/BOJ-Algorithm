const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = +input.shift(); // 말처럼 점프할 수 있는 최대 횟수
const [W, H] = input.shift().split(" ").map(Number); // 가로(W), 세로(H) 크기
const map = input.map((line) => line.split(" ").map(Number));

// 상하좌우 이동 (일반 원숭이 이동)
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// 말처럼 이동 (나이트 이동)
const horse_dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const horse_dy = [-1, 1, -2, 2, -2, 2, -1, 1];

// 방문 배열 (3차원) → bfs[y][x][k]: (y,x) 위치에서 k번 말 이동을 사용한 경우의 최소 이동 횟수
const bfs = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => Array(K + 1).fill(Infinity))
);

// BFS 탐색을 위한 큐 (초기 상태: (0,0)에서 K번 말 점프 사용 가능, 이동 횟수 0)
const queue = [[0, 0, K, 0]];
bfs[0][0][K] = 0;

let order = 0;
while (queue.length > order) {
  const [y, x, k, moves] = queue[order++];

  // 목표 지점 (H-1, W-1) 도착 시 최소 이동 횟수 출력 후 종료
  if (y === H - 1 && x === W - 1) {
    console.log(moves);
    return;
  }

  // 1️⃣ 원숭이 이동 (상하좌우)
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny >= 0 && ny < H && nx >= 0 && nx < W && map[ny][nx] === 0) {
      if (bfs[ny][nx][k] > moves + 1) {
        bfs[ny][nx][k] = moves + 1;
        queue.push([ny, nx, k, moves + 1]);
      }
    }
  }

  // 2️⃣ 말처럼 이동 (k > 0인 경우에만 가능)
  if (k > 0) {
    for (let i = 0; i < 8; i++) {
      let ny = y + horse_dy[i];
      let nx = x + horse_dx[i];

      if (ny >= 0 && ny < H && nx >= 0 && nx < W && map[ny][nx] === 0) {
        if (bfs[ny][nx][k - 1] > moves + 1) {
          bfs[ny][nx][k - 1] = moves + 1;
          queue.push([ny, nx, k - 1, moves + 1]);
        }
      }
    }
  }
}

// BFS 탐색이 끝날 때까지 도착점 `(H-1, W-1)`에 도달하지 못하면 -1 출력
console.log(-1);
