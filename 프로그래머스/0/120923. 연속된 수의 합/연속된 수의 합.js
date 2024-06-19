function solution(num, total) {
    let answer = [];
    // num * (x + (x + num - 1) / 2 = total
    
    let first = total / num - (num - 1) / 2;
    for(let i = 0; i < num; i++) {
        answer.push(first + i);
    }
    
    return answer;
}