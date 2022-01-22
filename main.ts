let vitesse = 45
k_Bit.run(DIR.RunForward, vitesse)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (k_Bit.ultra() < 100) {
        if (randint(0, 1) == 0) {
            k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 10)
        } else {
            k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 10)
        }
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
        k_Bit.run(DIR.RunForward, vitesse)
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 13)
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 13)
    }
})
