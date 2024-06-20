function solution(n, m, section) {
    let answer = 0;
    
    let fin = 0;
    section.forEach((item) => {
        if(item <= fin) return;
        
        fin = item + m - 1;
        answer++;
    })
    
    return answer;
}