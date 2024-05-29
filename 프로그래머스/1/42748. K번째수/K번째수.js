function solution(array, commands) {
    let answer = [];
    
    commands.forEach(([i, j, k]) => {
        let tmp = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(tmp[k - 1]);
    });
    
    return answer;
}