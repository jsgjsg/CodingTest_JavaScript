function solution(a, b) {
    let answer = '';
    
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    let date = b;
    for(let i = 1; i < a; i++) {
        date += month[i];
    }
    
    answer = week[(date + 4) % 7];
    
    return answer;
}