function solution(name, yearning, photo) {
    let answer = [];
    
    photo.forEach((arr) => {
        let score = arr.reduce((res, cur) => {
            let idx = name.indexOf(cur);
            let sc = idx != -1 ? yearning[idx] : 0;
            return res + sc;
        }, 0);
        answer.push(score);
    });
    
    return answer;
}