/**
  * Enumeration of Motor.
  */
enum motor {
    //% block="Forward \u21c8"
    Forward,
    //% block="Backward \u21ca"
    Backward
}

/**
  * Enumeration of TurnMotor.
  */
enum turn {
    //% block="Left \u27f5"
    Left,
    //% block="Right \u27f6"
    Right
}

/**
  * Enumeration of SpinMotor.
  */
enum spin {
    //% block="Left \u21f5"
    Left,
    //% block="Right \u21c5"
    Right
}
/**
  * Enumeration of ReadADC.
  */
enum readADC {
    //% block="ADC 0"
    ADC0 = 132,
    //% block="ADC 1"
    ADC1 = 196,
    //% block="ADC 2"
    ADC2 = 148,
    //% block="ADC 3"
    ADC3 = 212,
    //% block="ADC 4"
    ADC4 = 164,
    //% block="ADC 5"
    ADC5 = 228,
    //% block="ADC 6"
    ADC6 = 180,
    //% block="ADC 7"
    ADC7 = 224
}

/**
  * Enumeration of Servo.
  */
enum servo{
    //% block="1"
    SV1,
    //% block="2"
    SV2
}

enum motorCH {
    //% block="1"
    M1,
    //% block="2"
    M2
}

/**
 * Custom blocks
 */
//% weight=50 color=#02AFEC icon="\uf137"
namespace kmBoard {
      
    /**Motor Block to drives motor forward and backward. The speed motor is adjustable between 0 to 100.
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="km_Motor" block="Motor %motor|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=50
    export function Motor(Motor: motor, speed: number): void {  
        let motorspeed = pins.map(speed,0,100,0,1023)     
        if (Motor == motor.Forward) {
           pins.digitalWritePin(DigitalPin.P13, 1)
           pins.analogWritePin(AnalogPin.P14, motorspeed)
           pins.digitalWritePin(DigitalPin.P15, 0)
           pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Motor == motor.Backward) {
           pins.digitalWritePin(DigitalPin.P13, 0)
           pins.analogWritePin(AnalogPin.P14, motorspeed)
           pins.digitalWritePin(DigitalPin.P15, 1)
           pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }
}

//% weight=50 color=#02AFEE icon="\uf136"
namespace kmSensor {
      
    /**Motor Block to drives motor forward and backward. The speed motor is adjustable between 0 to 100.
      * @param speed percent of maximum speed, eg: 50
      */
    //% blockId="km_Sensor" block="Sensor %motor|speed %speed"
    //% speed.min=0 speed.max=100
    //% weight=95
    export function Sensor(Motor: motor, speed: number): void {  
        let motorspeed = pins.map(speed,0,100,0,1023)     
        if (Motor == motor.Forward) {
           pins.digitalWritePin(DigitalPin.P13, 1)
           pins.analogWritePin(AnalogPin.P14, motorspeed)
           pins.digitalWritePin(DigitalPin.P15, 0)
           pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
        if (Motor == motor.Backward) {
           pins.digitalWritePin(DigitalPin.P13, 0)
           pins.analogWritePin(AnalogPin.P14, motorspeed)
           pins.digitalWritePin(DigitalPin.P15, 1)
           pins.analogWritePin(AnalogPin.P16, motorspeed)
        }
    }
}