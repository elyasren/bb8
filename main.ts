basic.forever(function () {
    k_Bit.run(DIR.RunForward, 60)
    if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        k_Bit.run(DIR.RunForward, 60)
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 0 && k_Bit.obstacle(MotorObs.RightSide) == 1) {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 13)
    } else if (k_Bit.obstacle(MotorObs.LeftSide) == 1 && k_Bit.obstacle(MotorObs.RightSide) == 0) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 13)
    }
})
