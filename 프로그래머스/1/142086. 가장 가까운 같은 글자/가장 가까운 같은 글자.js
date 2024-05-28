function solution(s) {
    let answer = [];
    let alphabet = new Array(26).fill(-1);
    
    s.split('').forEach((item, idx) => {
        let cIdx = item.charCodeAt(0) - 'a'.charCodeAt(0); // cIdx : 알파벳 위치

        if(alphabet[cIdx] == -1) answer.push(-1);
        else answer.push(idx - alphabet[cIdx]);
        alphabet[cIdx] = idx;
    });
    
    return answer;
}