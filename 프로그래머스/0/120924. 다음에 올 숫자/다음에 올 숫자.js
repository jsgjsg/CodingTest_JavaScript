function solution(common) {
    let answer = 0;
    
    let d = common[1] - common[0];
    let r = common[1] / common[0];
    
    if(common[2] - common[1] == d) answer = common[0] + common.length * d;
    else answer = common[0] * Math.pow(r, common.length);
    
    return answer;
}