/*
Backtracking:
Definition: Backtracking is an algorithmic approach for finding solutions to problems incrementally, one step at a time, and removing those solutions that fail to satisfy the constraints of the problem at any point.

PSEUDO CODE SKELETON:
function FIND_SOLUTIONS(params){
    if (valid solution) {
        store the solution or print etc
        Return
    } else {
        for (all choices) {
            if (valid choice): {
                APPLY (choice)
                FIND_SOLUTIONS (param)
                BACKTRACK (remove choice)
            }
        }
    }
    return
}
*/
