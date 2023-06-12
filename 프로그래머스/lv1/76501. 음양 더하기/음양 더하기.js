function solution(absolutes, signs) {
    let absolute = 0;
    for (let i = 0; i < absolutes.length; i++) {
        absolute += signs[i] ? absolutes[i] : -absolutes[i]
    }
    return absolute;
}