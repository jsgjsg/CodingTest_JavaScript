function solution(lines) {
    let answer = 0;
    
    let dup = new Array(200).fill(0);
    
    lines.forEach(([a, b]) => { // -100 ~ -99 => 0 // 99 ~ 100 => 199
        for(let i = a; i < b; i++) dup[i + 100]++;
    })
    
    answer = dup.reduce((res, cur) => cur >= 2 ? res + 1 : res, 0)
    
    return answer;
}