function tourner_a_droite () {
    k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 13)
    k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, vitesse)
}
function tourner_a_gauche () {
    k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 13)
    k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, vitesse)
}
let vitesse = 0
music.setBuiltInSpeakerEnabled(true)
vitesse = 45
let obstacleDevant = 0
k_Bit.run(DIR.RunForward, vitesse)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (k_Bit.ultra() < 100) {
        obstacleDevant = 1
        if (k_Bit.obstacle(MotorObs.LeftSide) == 0) {
            tourner_a_droite()
        } else if (k_Bit.obstacle(MotorObs.RightSide) == 0) {
            tourner_a_gauche()
        } else {
            soundExpression.hello.play()
            if (randint(0, 1) == 0) {
                tourner_a_droite()
            } else {
                tourner_a_gauche()
            }
            basic.showIcon(IconNames.No)
        }
    } else {
        obstacleDevant = 0
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
    if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 1 && !(obstacleDevant)) {
        k_Bit.run(DIR.RunForward, vitesse)
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
        tourner_a_gauche()
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        tourner_a_droite()
    }
})
