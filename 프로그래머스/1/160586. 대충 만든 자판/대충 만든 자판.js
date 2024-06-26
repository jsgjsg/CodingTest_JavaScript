function solution(keymap, targets) {
    let answer = [];
    let alphabet = new Array(26).fill(0);
    
    keymap.forEach(key => {
        key.split('').forEach((alpha, idx) => {
            let ASCII = alpha.charCodeAt(0) - 'A'.charCodeAt(0);
            alphabet[ASCII] = alphabet[ASCII] == 0 ? idx + 1 : Math.min(alphabet[ASCII], idx + 1);
        })
    })
    
    targets.forEach((target, idx) => {
        let exist = true;
        answer[idx] = target.split('').reduce((res, cur) => {
            let ASCII = cur.charCodeAt(0) - 'A'.charCodeAt(0);
            if(alphabet[ASCII] == 0) exist = false;
            return res + alphabet[ASCII];
        }, 0);
        
        if(!exist) answer[idx] = -1;
    })
    
    return answer;
}