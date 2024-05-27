function solution(A, B) {
    let answer = 0;
    if(A == B) return answer;
    
    A = A.split('');
    B = B.split('');
    let len = A.length;
    
    for(let i = 1; i < len; i++) {
        let push = true;
        for(let j = 0; j < len; j++) {
            if(A[j] != B[(j + i) % len]) {push = false; break;}
        }
        if(push) {answer = i; break;}
    }
    
    return answer != 0 ? answer : -1;
}