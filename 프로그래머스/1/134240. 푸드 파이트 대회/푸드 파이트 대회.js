function solution(food) {
    let answer = '';
    
    
    let tmp = [];
    food.forEach((item, idx) => {
        tmp.push(String(idx).repeat(~~(item / 2)));
    });
    answer = tmp.join('') + 0 + tmp.reverse().join('');
    
    return answer;
}