function motor (speedL: number, speedR: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    Math.map(speedL, -100, 100, -255, 255),
    robotbit.Motors.M1A,
    Math.map(speedR, -100, 100, -255, 255)
    )
}
function testMotor () {
    motor(100, 0)
    basic.pause(1000)
    motor(-100, 0)
    basic.pause(1000)
    motor(0, 100)
    basic.pause(1000)
    motor(0, -100)
    basic.pause(1000)
}
function lineTracking () {
    if (pins.digitalReadPin(DigitalPin.P14) == IR_WHITE_VALUE && pins.digitalReadPin(DigitalPin.P15) == IR_WHITE_VALUE) {
        motor(MOTOR_SPEED_BASE, MOTOR_SPEED_BASE)
    } else if (pins.digitalReadPin(DigitalPin.P14) != IR_WHITE_VALUE && pins.digitalReadPin(DigitalPin.P15) == IR_WHITE_VALUE) {
        motor(MOTOR_SPEED_BASE, MTOR_SPEED_MIN)
    } else if (pins.digitalReadPin(DigitalPin.P14) == IR_WHITE_VALUE && pins.digitalReadPin(DigitalPin.P15) != IR_WHITE_VALUE) {
        motor(MTOR_SPEED_MIN, MOTOR_SPEED_BASE)
    } else {
        motor(MTOR_SPEED_MIN, MTOR_SPEED_MIN)
    }
}
let MOTOR_SPEED_BASE = 0
let MTOR_SPEED_MIN = 0
let IR_WHITE_VALUE = 0
IR_WHITE_VALUE = 0
MTOR_SPEED_MIN = 0
MOTOR_SPEED_BASE = 70
let MOTOR_SPEED_MAX = 100
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
basic.forever(function () {
    lineTracking()
})
