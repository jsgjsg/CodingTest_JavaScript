function solution(array, n) {
    var answer = 0;
    
    array.forEach(item => answer += n == item)
    
    return answer;
}