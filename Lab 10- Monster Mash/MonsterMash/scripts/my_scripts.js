$(function() {

 let headclix= 0, eyesclix= 0, noseclix= 0, mouthclix= 0;

 lightning_one();
 lightning_two();
 lightning_three();

    $('#head').on('contextmenu', function(e) {
        e.preventDefault();
        if (headclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            headclix += 1
        }
        else if (headclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            headclix = 0;
        }
    });

    $('#head').on('click', function() {
        if (headclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            headclix += 1
        }
        else if (headclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            headclix = 0;
        }
    });


    $('#eyes').on('contextmenu', function(e) {
        e.preventDefault();
        if (eyesclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            eyesclix += 1
        }
        else if (eyesclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            eyesclix = 0;
        }
    });

    $('#eyes').on('click', function() {
        if (eyesclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            eyesclix += 1
        }
        else if (eyesclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            eyesclix = 0;
        }
    });


    $('#nose').on('contextmenu', function(e) {
        e.preventDefault();
        if (noseclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            noseclix += 1
        }
        else if (noseclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            noseclix = 0;
        }
    });

    $('#nose').on('click', function() {
        if (noseclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            noseclix += 1
        }
        else if (noseclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            noseclix = 0;
        }
    });


    $('#mouth').on('contextmenu', function(e) {
        e.preventDefault();
        if (mouthclix > 0) {
            $(this).animate({ left: "+=367px" }, 500);
            mouthclix += 1
        }
        else if (mouthclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            mouthclix = 0;
        }
    });

    $('#mouth').on('click', function() {
        if (mouthclix < 9) {
            $(this).animate({ left: "-=367px" }, 500);
            mouthclix += 1
        }
        else if (mouthclix === 9) {
            $(this).animate({ left: "0px" }, 500);
            mouthclix = 0;
        }
    });
});

function lightning_one() {
    $("#container #lightning1"). fadeIn(250) .fadeOut(250) ;
    setTimeout("lightning_one()", 4000);
};

function lightning_two() {
    $("#container #lightning2"). fadeIn("fast") .fadeOut("fast") ;
    setTimeout("lightning_two()", 5000);
};

function lightning_three() {
    $("#container #lightning3"). fadeIn("fast") .fadeOut("fast") ;
    setTimeout("lightning_three()", 7000);
};


