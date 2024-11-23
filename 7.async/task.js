class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback){
        if(!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.some((item) => item.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback, time, canCall:true});
    }

    removeClock(time){
        return this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
               hour: "2-digit",
               minute: "2-digit",
        });    
    }

    start(){
        if(this.intervalId) return;

        this.intervalId = setInterval(() => { 
            this.alarmCollection.forEach((call) => { 
                if(call.time === this.getCurrentFormattedTime() && call.canCall){
                    call.canCall = false;
                    call.callback();
                }
            });
        }, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach(call => call.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}