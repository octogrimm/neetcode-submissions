class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        return sortString(s) === sortString(t);
    }
}

function sortString(str: string) {
  const counts = new Array(128).fill(0);
  for (let i = 0; i < str.length; i++) counts[str.charCodeAt(i)]++;
  let result = "";
  for (let c = 0; c < 128; c++) {
    if (counts[c]) result += String.fromCharCode(c).repeat(counts[c]);
  }
  return result;
}
