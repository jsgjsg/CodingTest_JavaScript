function solution(quiz) {
    let answer = [];
    
    quiz.forEach((item) => {
        item = item.split(' ');
        
        if(item[1] == '+') {
            if(Number(item[0]) + Number(item[2]) == Number(item[4]))
                answer.push("O");
            else answer.push("X");
        } else {
            if(Number(item[0]) - Number(item[2]) == Number(item[4]))
                answer.push("O");
            else answer.push("X");
        }
    });
    
    return answer;
}