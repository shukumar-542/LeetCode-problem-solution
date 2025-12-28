/**
 * 
 * You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.


 */

var checkRecord = function(s) {
    let abset = 0;
    let late = 0;
    for(let i = 0 ; i < s.length; i++){
        if(s[i] === "A"){
            abset++
            late = 0
        }else if(s[i] === "L"){
            late++
        }else{
            late = 0
        }

    }

    if(abset >= 2 || late >= 3) {
            return false;
        }
    return true

    // console.log(abset , late)
};

console.log(checkRecord("PPALLP"))