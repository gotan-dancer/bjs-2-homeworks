class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callBack){
        if(!time || !callBack){
            throw new Error('Отсутствуют обязательные аргументы');
        }

        for(let i = 0; i < this.alarmCollection.length; i++){
            if(this.alarmCollection.some((item) => item.time === time)){
                console.warn('Уже присутствует звонок на это же время');
            }
        }

        let canCall = true;

        this.alarmCollection.push({callBack, time, canCall});
    }

    removeClock(time){
        this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
               hour: "2-digit",
               minute: "2-digit",
        });    
    }

}