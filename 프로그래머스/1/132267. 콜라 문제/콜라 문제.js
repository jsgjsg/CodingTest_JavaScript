function solution(a, b, n) {
    let answer = 0; // 빈병 a개 => 새 콜라 b개 / 빈병 n개 => 몇개?
    
    while(n >= a) {
        let getCoke = ~~(n / a) * b;
        answer += getCoke; // answer += (n / a) * b;
        n = n % a + getCoke; // answer는 n이기도 함 => n = n % a + (n / a) * b;
    }
    return answer;
}