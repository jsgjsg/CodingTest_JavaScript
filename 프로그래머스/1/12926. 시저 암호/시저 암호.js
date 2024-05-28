function solution(s, n) {
    let answer = '';
    console.log(" ".charCodeAt(0));
    
    for(let i = 0; i < s.length; i++) {
        let c = s.charCodeAt(i);
        if(c == ' '.charCodeAt(0)) answer += ' ';
        else if(c >= 97) answer += String.fromCharCode((c + n - 97) % 26 + 97);
        else answer += String.fromCharCode((c + n - 65) % 26 + 65);
    }
    
    return answer;
}