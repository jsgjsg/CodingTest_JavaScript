function solution(common) {
    let answer = 0;
    
    let d = common[1] - common[0];
    let r = common[1] / common[0];
    
    if(common[2] - common[1] == d) answer = common[common.length - 1] + d;
    else answer = common[common.length - 1] * r;
    
    return answer;
}