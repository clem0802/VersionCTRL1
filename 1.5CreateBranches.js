// 2021.11.03 FROM (M) 
/*----------------------------------*/
/*----------------------------------*/ 
//! CREATE BRANCHES


/*----------------------------------*/
/*----------------------------------*/ (I)
//! VERSION CONTROL
// Version Control is a type of software that helps developers track changes in a code project like the one below
// for example, version control lets us look at a previous version of a project
// where we used different CSS styles

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <a href="#">Sign up now</a>
        <img src="https://mimo.app/i/homekia-bedroom.png"
    </body>
</html>


//?? (CSS)------------------
a {
    background-color: orange;
    position: relative;
}

img {
    width: 300px;
}




/*----------------------------------*/
/*----------------------------------*/ (II)
//! GIT 
// Git is a Version Control software that allows us to create COMMITS
// these are snapshots of our project at different points in time
// Commit_1 is the state of our code at a point in time
// if we make further code changes and commit them, we get Commit_2
//?? (TERMINAL)------------------ 
Main Branch (Master branch)
Main--Commit_1--Commit_2




/*----------------------------------*/
/*----------------------------------*/ (III)
//! BRANCHES
// successive commits make up a BRANCH, like the "Main Branch" branch here, also called "Master"
// the "Main Branch" is important because it contains the main version of our project code
//?? (TERMINAL)------------------ 
Main Branch (Master branch)
Main--Commit_1--Commit_2--Commit_3




/*----------------------------------*/
/*----------------------------------*/ (IV)
//! GIT BRANCH
// to  CREATE A NEW BRANCH, we use the "git branch" command with th enew branch's name, like "new_feature_1"
//?? (TERMINAL)------------------ 
git branch new_feature_1




/*----------------------------------*/
/*----------------------------------*/ (IV)
//! GIT BRANCH -D
// we can also DELETE  BRANCHES using "git branch -d" and the name of the branch we want to delete
//?? (TERMINAL)------------------ 
git branch -d new_feature_1




/*----------------------------------*/
/*----------------------------------*/ (V)
//! BRANCHING
// BRANCHING is a useful feature of GIT that copies the code of an existing branch, like "Main"
// and starts a NEW BRANCH
// BRANCHING allow developers to work on new features without breaking the main code of our project
// the "New Feature Branch" copies the code state at "Main--Commit_1"
// then, it adds its own code changes with "Commit_A" and "Commit_B"
//? we make a new branch when implementing a NEW FEATURE
//? since they are on a different branch, code changes in "Commit_A" and "Commit_B" don't affect the project state in the "Main" branch
//?? (TERMINAL)------------------ 
Main Branch (Master branch)
Main--Commit_1
        \
         \
          \
        Commit_1--Commit_A--Commit_B
            New Feature Branch




/*----------------------------------*/
/*----------------------------------*/ (VI)
//! GIT CHECKOUT
// when creating a new branch with "GIT BRANCH", we stay on our current branch, "Main" branch
// we can use the "GIT CHECKOUT" command to navigate to any branch, including the new branch that was just created
//?? (TERMINAL)------------------ 
git checkout new_feature_1





/*----------------------------------*/
/*----------------------------------*/ (VII)
//! GIT CHECKOUT -B
// we can use "git checkout -b" to create a new branch like "new_feature_1"
// and navigate to it in one ecommand
//! GIT CHECKOUT -B = GIT CHECKOUT + GIT BRANCH
//?? (TERMINAL)------------------ 
git checkout -b new_feature_1




/*----------------------------------*/
/*----------------------------------*/ (VIII)  !!!
//! MERGING BRANCHES
// Mergin is a feature we can use to combine code changes from different branches
// we can combine our "new_feature" branch with our "main" branch
//?? (TERMINAL)------------------ 
Main Branch (Master branch)

Main--Commit_1--------Merged_Commit
        \                 /
         \               /
          \             /
        Commit_1--Commit_2

            new_feature_1 Branch




/*----------------------------------*/
/*----------------------------------*/ (IX)
//! MERGE
// before merging, we have to commit our changes using "git commit -m"
// where "-m" stands for message
//?? (TERMINAL)------------------ 
git commit -m "completed new_feature_1"




/*----------------------------------*/
/*----------------------------------*/ (X)
//! MERGE
// we are currently on our "new_feature_1" branch
// which has "Commit_1" and "Commit_2"
//?? (TERMINAL)------------------ 
Main Branch (Master branch)

Main--Commit_1
        \                 
         \               
          \             
        Commit_1--Commit_2

            new_feature_1 Branch




/*----------------------------------*/
/*----------------------------------*/ (X)
//! MERGE
// usually, developers MERGE changes from other branches into the "main" branch
// to switch to it, use "git checkout main"
git checkout main 

// we can now use "GIT MERGE" to merge code changes in "new_feature_1" with the "Main" branch code
git merge new_feature_1

//! after merging branches, it is good practice to DELETE our "new_feature_1" branch
// since all code changes are already in "Main"
git branch -d new_feature_1

// when merging branches with conflicting code changes, we may come across MERGE CONFLICTS
// and we will see messages about MERGE FAILED
$ git merge new_feature_1

// to resolve a MERGE CONFLICT, we look at the conflicting code, like this "p" element, and choose which branch's version to keep
<<<<<<< HEAD 
<p>One Developer updated this p element</p>
=======
<p>Another developer also updated the same p element in a different way in new_feature_</p>
>>>>>>> new_feature_</html>




/*----------------------------------*/
/*----------------------------------*/ (XI)
// arrange the commands to commit changes in the current branch
git commit -m "finished feature"

// switch to "main"
git checkout main

// and then merge "new_feature" into "main"
git merge new_feature
