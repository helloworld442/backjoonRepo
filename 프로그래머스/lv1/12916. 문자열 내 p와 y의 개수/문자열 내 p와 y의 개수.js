function solution(s) {
  s = s.toUpperCase();
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "P") cnt++;
    if (s[i] == "Y") cnt--;
  }

  return !cnt;
}