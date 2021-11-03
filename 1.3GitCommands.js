// 2021.11.03 FROM (M) 
/*----------------------------------*/
/*----------------------------------*/ 
//! GIT + COMMANDS


/*----------------------------------*/
/*----------------------------------*/ (I)
//! GIT STATUS
// this command allows us to check on the current status of our project
//?? (TERMINAL)------------------ 
alex:myproject alex$ git status




/*----------------------------------*/
/*----------------------------------*/ (II)
//! GIT ADD
// since we haven't added any files to our project
// the computer will show us that no files are being tracked => (nothing to commit........)
//?? (TERMINAL)------------------ 
alex:myproject alex$ git status

// let's navigate to our myproject
alex:myproject alex$ cd myproject




/*----------------------------------*/
/*----------------------------------*/ (III)
//! GIT TOUCH     VS    TOUCH
// we can create a NEW FILE in our project folder using the "touch" command
alex:myproject alex$ git touch newfile.txt

// "TOUCH" creates a new file in the same way that creating a file manually on our computer works
alex:myproject alex$ touch newfile.txt




/*----------------------------------*/
/*----------------------------------*/ (IV)
//! LS
// we can cthen use a command called "ls"
// to list all the files and folders in our current directory
// let us see all the files and folders in our directory
alex:myproject alex$ ls 

// the terminal will now show that a new file named "newfile.txt" was created with the "touch" command
alex:myproject alex$ ls 
newfile.txt




/*----------------------------------*/
/*----------------------------------*/ (V)
//! STAGING AREA  
// this is a waiting room for our files before we actually add them to our project
// before we COMMIT them
//! we can use "GIT ADD" to add our "newfile.txt" to the STAGING AREA
alex:myproject alex$ git add newfile.txt

// we can use "git add" to add our "newfile.txt" to the STAGING AREA
// and we will see that our newfile.txt is ready to be committed 
// it is not actually part of our project just yet, it is in the waiting room
kris:myproject kris$ git add newfile.txt
