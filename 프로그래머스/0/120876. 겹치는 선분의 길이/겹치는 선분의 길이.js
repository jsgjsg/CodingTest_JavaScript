function solution(lines) {
    let answer = 0;
    
    let dup = new Array(200).fill(0);
    
    lines.forEach((line) => { // -100 ~ -99 => 0 // 99 ~ 100 => 199
        for(let i = line[0]; i < line[1]; i++) {
            dup[i + 100]++;
        }
    })
    
    answer = dup.reduce((res, cur) => {
        if(cur >= 2) return res + 1;
        else return res;
    }, 0)
    
    return answer;
}