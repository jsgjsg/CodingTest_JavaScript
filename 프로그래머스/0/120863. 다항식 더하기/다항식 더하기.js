function solution(polynomial) {
    let answer = '';
    let x = 0;
    let n = 0;
    polynomial.split(' ').forEach((item) => {
        if(item == '+') return;
        
        let len = item.length;
        if(item.charAt(len - 1) == 'x') {
            if(len > 1) x += Number(item.substring(0, len - 1));
            else x++;
        }
        else n += Number(item);
    });

    if(x != 0) {
        answer += (x != 1 ? x : '') + 'x';
    }
    
    if(n != 0) {
        answer != '' ? answer += ' + ' : '';
        answer += n;
    }
    
    return answer;
}