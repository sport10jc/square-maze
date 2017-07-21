var topWall
var bottomWall
var leftWall
var rightWall
var player1
var player2
var ball1X = 900
var ball1Y = 900
var topD1
var topD2
var bottomD1
var bottomD2
var score1 = 0
var score2 = 0
var lastWall1
var lastWall2
var ob1circle
var ball
var ball2
var spike
var spike2
var spike2X
var spike2Y
var ob2circle
var ob3circle
var end1
var end2
var end3
var end4
var end5
var end6
var end7
var end8
var end9


var mrect1
var mrect2
var mrect3
var mrect4
var mrect5

var sq1
var sq2
var sq3
var sq4
var sq5
var sq6
var sq7
var sq8
var sq9
var sq10
var sq11
var sq12
var sq13
var sq14
var sq15

var rect1
var rect2
var rect3
var rect4
var rect5

//player1 is purple to start
//player2 is yellow to start

function setup() {
    createCanvas(1800, 1032)

    topWall = createSprite(900, 15, 1800, 30)
    bottomWall = createSprite(900, 1017, 1800, 30)
    leftWall = createSprite(15, 516, 30, 1032)
    rightWall = createSprite(1785, 516, 30, 1032)
    topWall.shapeColor = color(0, 0, 0)
    bottomWall.shapeColor = color(0, 0, 0)
    leftWall.shapeColor = color(0, 0, 0)
    rightWall.shapeColor = color(0, 0, 0)
    topWall.immovable = true
    bottomWall.immovable = true
    leftWall.immovable = true
    rightWall.immovable = true
        //use to be 30,30
    player1 = createSprite(893, 500, 25, 25)
    player1.shapeColor = ('purple')
    player2 = createSprite(893, 530, 25, 25)
    player2.shapeColor = ('yellow')
    topD1 = createSprite(885, 30, 15, 900)
    topD2 = createSprite(900, 30, 15, 900)
    end1 = createSprite(1700, 100, 30, 60)
    end2 = createSprite(1700, 200, 30, 60)
    end3 = createSprite(1700, 300, 30, 60)
    end4 = createSprite(1700, 400, 30, 60)
    end5 = createSprite(1700, 500, 30, 60)
    end6 = createSprite(1700, 600, 30, 60)
    end7 = createSprite(1700, 700, 30, 60)
    end8 = createSprite(1700, 800, 30, 60)
    end9 = createSprite(1700, 900, 30, 60)

    sq1 = createSprite(1000, 300, 100, 100)
    sq2 = createSprite(1000, 750, 100, 100)
    sq3 = createSprite(1000, 900, 100, 100)
    sq4 = createSprite(1200, 200, 100, 100)
    sq4 = createSprite(1200, 350, 100, 100)
    sq5 = createSprite(1000, 150, 100, 100)
    sq6 = createSprite(1200, 500, 100, 100)
    sq7 = createSprite(1200, 650, 100, 100)
    sq8 = createSprite(1200, 800, 100, 100)
    sq9 = createSprite(1400, 300, 100, 100)
    sq10 = createSprite(1400, 450, 100, 100)
    sq11 = createSprite(1400, 600, 100, 100)
    sq12 = createSprite(1400, 750, 100, 100)
    sq13 = createSprite(1600, 400, 100, 100)
    sq14 = createSprite(1600, 550, 100, 100)
    sq15 = createSprite(1600, 700, 100, 100)
    rect1 = createSprite(1600, 975, 100, 40)
    rect2 = createSprite(1600, 60, 100, 40)
    rect3 = createSprite(500, 60, 60, 200)
    rect4 = createSprite(650, 60, 60, 200)



    bottomD1 = createSprite(885, 1005, 15, 900)
    bottomD2 = createSprite(900, 1005, 15, 900)
    topD1.immovable = true
    bottomD1.immovable = true
    topD2.immovable = true
    bottomD2.immovable = true
    mrect1 = createSprite(1600, 830, 60, 250)
    mrect2 = createSprite(550, 800, 250, 60)
    mrect3 = createSprite(225, 800, 60, 200)
    mrect4 = createSprite(100, 800, 60, 200)
    mrect5 = createSprite(350, 800, 60, 200)
    mrect1.setVelocity(0, 5),
        mrect2.setVelocity(1, 1)
    mrect3.setVelocity(0, 2)
    mrect4.setVelocity(0, 10)
    mrect5.setVelocity(0, 7)

    //  mrect7.setVelocity(0,7)
    rect1.setVelocity(5, 0)
    rect2.setVelocity(5, 0)
    rect3.setVelocity(0, 3)
    rect4.setVelocity(0, 6)
    //  mrect6.setVelocity(0,10)

    ball = createSprite(400, 300, 40, 40)
    ball.draw = function() {
        ellipse(0, 0, 40, 40)
    //  ball2=createCanvas(0,0,10,10)
    }
    ball.setVelocity(5, 5)

    ball2 = createSprite(1500, 300, 40, 40)
    ball2.setVelocity(3, 6)

    ball2.draw = function() {
        ellipse(0, 0, 80, 80)
    }
    player2.immovable = true;
    player1.immovable = true;
    spike2 = createSprite(1200, 500, 100, 100)
        // spike2.draw = function() {
        //     triangle(750, 300, 750, 200, 650, 300)
        // }
    spike = createSprite(750, 500, 100, 100)
        // spike.draw = function() {
        //     triangle(150, 5, 5, 8, 7, 150)
        // }
    ob2circle = createSprite(1000, 440, 100, 100)

    ob3circle = createSprite(1000, 600, 100, 100)

}




var start = false

function draw() {
        background(155)
    

        //player1 arrow controls
    if (keyIsDown(LEFT_ARROW)) {
        player1.setVelocity(-3, 0)
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        player1.setVelocity(3, 0)
    }
    else if (keyIsDown(UP_ARROW)) {
        player1.setVelocity(0, -3)
    }
    else if (keyIsDown(DOWN_ARROW)) {
        player1.setVelocity(0, 3)
    }
    else {
        player1.setVelocity(0, 0)
    }

    // player 2 arrow controls
    if (keyIsDown(65)) {
        player2.setVelocity(-3, 0)
    }
    else if (keyIsDown(68)) {
        player2.setVelocity(3, 0)
    }
    else if (keyIsDown(83)) {
        player2.setVelocity(0, 3)
    }
    else if (keyIsDown(87)) {
        player2.setVelocity(0, -3)
    }
    else {
        player2.setVelocity(0, 0)
    }

    // player1 top wall collide done
    if (player1.collide(topWall)) {
        player1.setVelocity(0, 0)
        player1.position.y = player1.position.y + 40
        score1--
    }
    // player1 bottom wall collide done, need to move y location so player isn't stuck
    if (player1.collide(bottomWall)) {
        player1.setVelocity(0, 0)
        score1--
        player1.position.y = player1.position.y - 40
    }


    //player1 left wall collide done
    if (player1.collide(leftWall)) {
        player1.setVelocity(0, 0)
        if (lastWall1 != leftWall) {
            score1 = score1 + 2
            lastWall1 = leftWall
        }
        player1.position.x = player1.position.x + 40
    }


    //player1 right wall collide done
    if (player1.collide(rightWall)) {
        player1.setVelocity(0, 0)
        if (lastWall1 != rightWall) {
            score1 = score1 + 2
            lastWall1 = rightWall
        }
        player1.position.x = player1.position.x - 40
    }


    //player2 top wall collide done
    if (player2.collide(topWall)) {
        player2.setVelocity(0, 0)
        player2.position.y = player2.position.y + 40
        score2--
    }


    //player2 bottom wall collide done
    if (player2.collide(bottomWall)) {
        player2.setVelocity(0, 0)
        player2.position.y = player2.position.y - 40
        score2--
    }

    //player2 left wall collide done
    if (player2.collide(leftWall)) {
        player2.setVelocity(0, 0)
        if (lastWall2 != leftWall) {
            score2 = score2 + 2
            lastWall2 = leftWall
        }
        player2.position.x = player2.position.x + 40
    }



    //player2 right wall collide done
    if (player2.collide(rightWall)) {
        player2.setVelocity(0, 0)
        player2.position.x = player2.position.x - 40
        if (lastWall2 != rightWall) {
            score2 = score2 + 2
            lastWall2 = rightWall
        }
    }


    //player1 top divider1 collide done
    if (player1.collide(topD1)) {
        player1.setVelocity(0, 0)
        player1.position.x = player1.position.x - 40
        score1--
    }


    //player1 bottom divider1 collide done
    if (player1.collide(bottomD1)) {
        player1.setVelocity(0, 0)
        player1.position.x = player1.position.x - 40
        score1--
    }


    //player1 bottom divider2 collide done
    if (player1.collide(bottomD2)) {
        player1.setVelocity(0, 0)
        player1.position.x = player1.position.x + 40
        score1--
    }


    //player1 top divider2 collide done
    if (player1.collide(topD2)) {
        player1.setVelocity(0, 0)
        player1.position.x = player1.position.x + 40
        score1--
    }

    //player2 top divider1

    if (player2.collide(leftWall)) {
        player2.setVelocity(0, 0)
        player2.position.x = player2.position.x + 40
        if (lastWall2 != leftWall) {
            score2 = score2 + 2
            lastWall2 = leftWall
        }

    }


    //player2 bottom divider2 collide done
    if (player2.collide(bottomD2)) {
        player2.setVelocity(0, 0)
        player2.position.x = player2.position.x + 40
        score2--
    }


    //player2 top divider2 collide done
    if (player2.collide(topD2)) {
        player2.setVelocity(0, 0)
        player2.position.x = player2.position.x + 40
        score2--
    }


    //player2 top divider1 collide done
    if (player2.collide(topD1)) {
        player2.setVelocity(0, 0)
        player2.position.x = player2.position.x - 40
        score2--
    }


    //player2 bottom divider1 collide done
    if (player2.collide(bottomD1)) {
        player2.setVelocity(0, 0)
        player2.position.x = player2.position.x - 40
        score2--
    }

    if (player1.collide(ob2circle)) {
        player1.setVelocity(0, 0)
        player1.position.x = 900
        player1.position.y = 500
        score1--
    }

    if (player2.collide(ob2circle)) {
        player2.setVelocity(0, 0)
        player1.position.x = 900
        player1.position.y = 500

        score2--
    }


    if (player1.collide(ob3circle)) {
        player1.setVelocity(0, 0)
        player1.position.x = 900
        player1.position.y = 500
        score1--
    }

    if (player2.collide(ob3circle)) {
        player2.setVelocity(0, 0)
        player1.position.x = 900
        player1.position.y = 500

        score2--
    }
    //player 2 hit end 1 and goes to center
    if (player2.collide(end1)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }


    //player 1 hits end and goes to center
    if (player1.collide(end1)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }




    // player 2 hits end 2 and goes to center
    if (player2.collide(end2)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    //end 2 and go to begining
    if (player1.collide(end2)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }

    if (player1.collide(end3)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }

    if (player2.collide(end3)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(end4)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }

    if (player2.collide(end4)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(end5)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }

    if (player2.collide(end5)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(end6)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(end6)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(end7)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(end7)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(end8)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(end8)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    // 


    if (player1.collide(mrect1)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }

    if (player2.collide(mrect1)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(mrect2)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(mrect2)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player2.collide(mrect3)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(mrect3)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }

    if (player1.collide(mrect4)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(mrect4)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(mrect5)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(mrect5)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq1)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq1)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(sq2)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq2)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(sq3)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq3)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq4)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq4)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq5)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq5)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq6)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq6)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq7)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq7)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq8)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq8)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq9)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq9)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq10)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq10)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq11)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq11)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq12)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq12)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq13)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq13)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(sq14)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq14)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }

    if (player1.collide(sq15)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(sq15)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player2.collide(rect1)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(rect1)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(rect2)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(rect2)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(rect3)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(rect3)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score1--
    }
    if (player2.collide(rect4)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(rect4)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score2--
    }
    if (player2.collide(ob2circle)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(ob2circle)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score2--
    }
    if (player2.collide(ob3circle)) {
        player2.setVelocity(0, 0)
        player2.position.x = 890
        player2.position.y = 500
        score2--
    }
    if (player1.collide(ob3circle)) {
        player1.setVelocity(0, 0)
        player1.position.x = 890
        player1.position.y = 500
        score2--
    }
    //   if (player2.collide(ob4)){
    //         player2.setVelocity(0,0)
    //         player2.position.x =890
    //         player2.position.y=500
    //         score2--
    //     }
    // if (player1.collide(ob4)){
    //     player1.setVelocity(0,0)
    //     player1.position.x =890
    //     player1.position.y=500
    //     score1--
    // }


    //player1 spike collide
    // if(player1.collide(spike)){
    //     player1.setVelocity(0,0)
    //     console.log("hit spike")
    //     player1.position.x = player1.position.x - 5
    //     score1--
    // }
    spike.bounce(player1, function() {
        score1--
    })
    spike.bounce(player2, function() {
        score2--
    })
    spike.bounce(leftWall)
    spike.bounce(rightWall)
    spike.bounce(topWall)
    spike.bounce(bottomWall)
    spike.bounce(topD1)
    spike.bounce(bottomD1)
        //player2 spike collide
        // if(player2.collide(spike)){
        //     player2.setVelocity(0,0)
        //     player2.position.x = player2.position.x - 5
        //     score2--
        // }


    spike2.bounce(player1, function() {
        score1--
    })
    spike2.bounce(player2, function() {
        score2--
    })
    spike2.bounce(leftWall)
    spike2.bounce(rightWall)
    spike2.bounce(topWall)
    spike2.bounce(bottomWall)
    spike2.bounce(topD1)
    spike2.bounce(bottomD1)
        //player2 spike collide
        // if(player2.collide(spike2)){
        //     player2.setVelocity(0,0)
        //     player2.position.x = player2.position.x - 5
        //     score2--
        // }

    ball.bounce(player1, function() {
        score1--
    })
    ball.bounce(player2, function() {
        score2--
    })
    ball.bounce(leftWall)
    ball.bounce(rightWall)
    ball.bounce(topWall)
    ball.bounce(bottomWall)
    ball.bounce(topD1)
    ball.bounce(bottomD1)
    ball.bounce(topD2)
    ball.bounce(bottomD2)


    ball2.bounce(player1, function() {
        score1--
    })
    ball2.bounce(player2, function() {
        score2--
    })
    ball2.bounce(leftWall)
    ball2.bounce(rightWall)
    ball2.bounce(topWall)
    ball2.bounce(bottomWall)
    ball2.bounce(topD1)
    ball2.bounce(bottomD1)
    ball2.bounce(topD2)
    ball2.bounce(bottomD2)
    spike.rotation += 4;
    drawSprites()

    mrect1.bounce(topWall)
    mrect1.bounce(bottomWall)

    mrect2.bounce(topWall)
    mrect2.bounce(bottomWall)
    mrect2.bounce(topD1)
    mrect2.bounce(bottomD1)
    mrect2.bounce(leftWall)

    mrect3.bounce(topWall)
    mrect3.bounce(bottomWall)

    mrect4.bounce(topWall)
    mrect4.bounce(bottomWall)

    mrect5.bounce(topWall)
    mrect5.bounce(bottomWall)

    rect2.bounce(rightWall)
    rect2.bounce(topD2)

    rect1.bounce(rightWall)
    rect1.bounce(bottomD2)

    rect3.bounce(topWall)
    rect3.bounce(bottomWall)

    rect4.bounce(topWall)
    rect4.bounce(bottomWall)
        // ob2circle.bounce(player1, function(){
        //     score1--
        // })
    ob2circle.setVelocity(0, 0)

    //score for player1 & player2
    textSize(32)
    fill(255)
    text("Player1 Score: " + score1, 1000, 25)

    text("Player2 Score: " + score2, 550, 25)

    if (score1 >= 5 || score1 <= -10 || score2 >= 5 || score2 <= -10) {
        textSize(65)
        fill(255)
        if (score1 > score2) {
            text("Winner", 1200, 100)
            text("Loser", 300, 100)
        }
        if (score2 > score1) {
            text("Winner", 300, 100)
            text("Loser", 1200, 100)
        }

        text("Game Over", 730, 500)
        start = false

    }
    if (!start) {
        fill("white")
        rect(200,100, 1250,700)
        console.log(allSprites)
        fill("black")
        textSize(40)
        text("Instructions", 275, 200)
        textSize(32)
        text("- Player1 uses arrow keys to move", 250, 300)
        textSize(32)
        text("- Player2 uses W A S D to move", 250, 350)
        textSize(32)
        text("- Go to the walls to score points. You will not score points unless you alternate walls.", 250, 400)
        textSize(32)
        text("- Avoid the obstacles or you will lose points", 250, 450)
        textSize(32)
        text("- The first person to score 5 wins.", 250, 500)
        textSize(32)
        text("- The first person to with a score of -10 loses.", 250, 550)
        textSize(32)
        text("- Press the spacebar to start.", 250, 600)
    }

}

function keyPressed(){
    if(keyCode == 32){
        start = true;
        score1 = 0;
        score2 = 0;
        player1.position.x=893
        player1.position.y=500
        player2.position.x=893
        player2.position.y=530
    }
}
