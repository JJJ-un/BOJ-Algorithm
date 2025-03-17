const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const S = Number(input);

function BFS() {
  let queue = [];
  let visited = Array.from({ length: S + 1 }, () => Array(S + 1).fill(false)); // [이모티콘 개수][클립보드 개수]
  
  //방문배열 개수를 채우는 것?
  // 클립 보드안의 개수
  queue.push([1, 0, 0]); // [현재 화면 개수, 클립보드 개수, 연산 횟수]
  visited[1][0] = true;

  while (queue.length) {
    let [screen, clipboard, time] = queue.shift();

    if (screen === S) return time; // 목표 개수 도달 시 최소 횟수 반환

    // 1. **복사 (현재 화면을 클립보드에 저장)**
    if (!visited[screen][screen]) {
      visited[screen][screen] = true;
      queue.push([screen, screen, time + 1]);
    }

    // 2. **붙여넣기 (클립보드 내용을 화면에 추가)**
    if (clipboard > 0 && screen + clipboard <= S && !visited[screen + clipboard][clipboard]) {
      visited[screen + clipboard][clipboard] = true;
      queue.push([screen + clipboard, clipboard, time + 1]);
    }

    // 3. **삭제 (이모티콘 1개 삭제)**
    if (screen > 1 && !visited[screen - 1][clipboard]) {
      visited[screen - 1][clipboard] = true;
      queue.push([screen - 1, clipboard, time + 1]);
    }
  }
}

console.log(BFS());