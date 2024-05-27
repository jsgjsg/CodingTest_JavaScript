function solution(numlist, n) {
    let answer = [];
    
    answer = numlist.sort((a, b) => {
        let s = Math.abs(a - n) - Math.abs(b - n);
        
        return s != 0 ? s : b - a;
    })
    
    return answer;
}