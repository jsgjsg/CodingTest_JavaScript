function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a, b) => b - a);
    let box = ~~(score.length / m);
    
    for(let i = 1; i <= box; i++) {
        answer += score[i * m - 1] * m;
    }
    
    return answer;
}