function car_back () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
}
function car_left () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_forward () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_right () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
}
let diatance_r = 0
let distance_l = 0
let distance = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    distance = mecanumRobotV2.ultra()
    if (distance < 20) {
        car_back()
        mecanumRobotV2.state()
        basic.pause(500)
        mecanumRobotV2.setServo(180)
        basic.pause(500)
        distance_l = mecanumRobotV2.ultra()
        basic.pause(500)
        mecanumRobotV2.setServo(0)
        basic.pause(500)
        diatance_r = mecanumRobotV2.ultra()
        basic.pause(500)
        if (distance_l > diatance_r) {
            car_left()
            mecanumRobotV2.setServo(90)
            basic.pause(300)
        } else {
            car_right()
            mecanumRobotV2.setServo(90)
            basic.pause(300)
        }
    } else {
        car_forward()
    }
})
