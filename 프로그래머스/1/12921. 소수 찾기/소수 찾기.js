function solution(n) {
    let answer = 0;
    
    let prime = new Array(n + 1).fill(true);
    
    for(let i = 2; i <= n; i++) {
        if(prime[i]) {
            answer++;
            for(let j = i * 2; j <= n; j += i) prime[j] = false;
        }
    }
    
    return answer;
}