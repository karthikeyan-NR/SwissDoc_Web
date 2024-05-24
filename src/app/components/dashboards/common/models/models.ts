export interface HeartRate {
    _id: string;
    bpm: number;
    time: Date;
    prevTime: Date;
    timeDifference: number;
    prevTimeDifference: number;
    differenceInInterval: number;
    interval: number;
    imei: number;
}

export interface Inference {
    timeId: string;
    initialCount: number;
    subsequentCount: number;
}
