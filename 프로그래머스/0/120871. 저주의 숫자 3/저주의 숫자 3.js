function solution(n) {
    
    for(let i = 1; i <= n; i++) {
        let x = i; // x : 3 여부 판별
        
        if(i % 3 == 0) n++;
        else while(x > 0) {
            if(x % 10 == 3) {n++; break;}
            x = ~~(x / 10);
        }
    }
    
    return n;
}