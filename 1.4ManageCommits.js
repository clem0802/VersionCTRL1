// 2021.11.03 FROM (M) 
/*----------------------------------*/
/*----------------------------------*/ 
//! MANAGING COMMITS


/*----------------------------------*/
/*----------------------------------*/ (I)
//! GIT LOG
// this command allows us to VIEW our //! COMMIT HISTORY
// the "git log" output shows that we have one provious commit and also shows the commit message etc
//?? (TERMINAL)------------------ 
meg:myproject meg$ git log




/*----------------------------------*/
/*----------------------------------*/ (II)
//! GIT COMMIT --AMEND
// we can also amend previous commits if we need to add or change old commit messages 
// by using --amend
//?? (TERMINAL)------------------ 
meg:myproject meg$ git commit --amend -m "update message about newfil.txt"

// we can use "git commit --amend" and "-m" to change our message in our previous commit
meg:myproject meg$ git commit --amend -m "update message about xxfile.txt"

// and use "git log" again to check our updated commit message 
meg:myproject meg$ git log




/*----------------------------------*/
/*----------------------------------*/ (III)
//! GIT REFLOG
// we can use "git reflog" to view COMMITS and updates we have made
// => we can VIEW OUR PAST COMMITS and any amendments we have made //!
//?? (TERMINAL)------------------ 
meg:myproject meg$ git reflog
