function solution(number, limit, power) {
    let answer = 0;
    
    let prime = getPrime(number);
    for(let i = 1; i <= number; i++) {
        let cur = i;
        let count = 1;
        for(let j = 2; j <= i; j++) {
            if(!prime[j]) continue;
            let tmp = 1;
            while(cur % j == 0) {
                tmp++;
                cur = ~~(cur / j);
            }
            count *= tmp;
            if(count > limit) break;
        }
        answer += count > limit ? power : count;
    }
    
    return answer;
}
function getPrime(n) {
    let prime = new Array(n + 1).fill(true);
    prime[0] = prime[1] = false;
    
    for(let i = 2; i < Math.sqrt(n); i++) {
        if(prime[i]) {
            for(let j = i * 2; j <= n; j += i) prime[j] = false;
        }
    }
    return prime;
}