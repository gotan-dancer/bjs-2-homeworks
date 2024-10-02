class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock((time) => callBack ){
        if(!time || !callBack){
            throw new Error('Отсутствуют обязательные аргументы');
        }

        for(let i = 0; i < this.alarmCollection.length; i++){
            if(this.alarmCollection[i] === time){
                console.warn('Уже присутствует звонок на это же время');
            }
        }

        this.alarmCollection.push([callback, time, canCall]);
    }

    removeClock(time){
        //filter();
    }

    getCurrentFormattedTime(){
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }

}