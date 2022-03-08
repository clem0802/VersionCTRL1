// 2021.11.03 FROM (M) 
/*----------------------------------*/
/*----------------------------------*/ (I)
//! VERSION CONTROL
// "VC" allows developers to "time travel" to previous versions of a project
// "VC" allows many developers to work easily on the same project
// "VC" is a software that tracks what changes are made to a project
// "VC" allows developers to create snapshots of a project at different points in time
// "VC" allows developers to "time travel" to previous versions of a project
// "VC" allows developers to "time travel" back to a version without the bug

// (HTML)------------------
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


// (CSS)------------------
a {
    background-color: orange;
    position: relative;
}

img {
    width: 300px;
}





/*----------------------------------*/
/*----------------------------------*/ (II)
//! VERSION CONTROL
// Version Contro also helps several programmers work together on the same project
// for example, it allows one person to change a "p" element's style and another to add an "h4" rule

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <img src="https://mimo.app/i/homekia-bedroom.png" width="300px">
        <h4>PARIS</h4>
        <p>$65/night</p>
    </body>
</html>


//?? (CSS)------------------
p {
    background-color: darkgreen;
    padding: 5px;
    color: white;
    position: absolute;
    top: 150px;
    left: 220px;
}





/*----------------------------------*/
/*----------------------------------*/ (III)
//! VERSION CONTROL
// the programmers can then combine all these changes into one version
// that has both the "darkgreen" paragraph, and the "h4" rule

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <img src="https://mimo.app/i/homekia-bedroom.png" width="300px">
        <h4>PARIS</h4>
        <p>$65/night</p>
    </body>
</html>


//?? (CSS)------------------
h4 {
    background-color: white;
    padding: 5px;
    position: absolute;
    top: 0px;
    left: 30px;
}

p {
    background-color: darkgreen;
    padding: 5px;
    color: white;
    position: absolute;
    top: 150px;
    left: 220px;
}





/*----------------------------------*/
/*----------------------------------*/ (IV)
//! GIT => COMMIT
// "Git" is a type of Version Control software that allows us to create COMMITS or snapshots of our project at different points in time
// it is a vital tool in the toolkit of any web developer
// here is a peek at how a Git commit looks

commit 978b63054774433bfe6ba1c780d721293e28baa7 (HEAD -> master)
Author: theweasel
 <weasel@mail.com>
Date:   Wed Feb 17 23:35:49 2021 -0800

    add style to the h4 element


