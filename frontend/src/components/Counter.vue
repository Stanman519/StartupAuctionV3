<template>
    <div>
        <section>
            <b-container class="timer-row">
                <b-row>
                    <b-col class="col-sm-1">
                    </b-col>
                    <b-col class="hours col-sm-6">
                        <div class="big-num">{{displayHours}}:{{displayMinutes}}:{{displaySeconds}} </div>
                        <!-- <div class="clock-label">hours</div> -->
                    </b-col>
                    <b-col class="col-sm-1">
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>

export default {
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond', 'updateClock'],
    data: () => ({
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        expired: false,
    }),
    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60
        },
        _hours() {
            return this._minutes * 60
        },
        _days() {
            return this._hours * 24
        },
        end() {
            return new Date(
                this.year,
                this.month,
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    watch: {
        updateClock: function() {
            this.showRemaining();
        
            
        }
        
    },
    methods: {
        showRemaining(){
            const timer = setInterval(() => {
                const now = new Date();
                let utcDate = new Date(
                    now.getFullYear(), now.getUTCMonth(), now.getUTCDate(),
                        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), 10);

                const distance = this.end.getTime() - utcDate.getTime();

                if(distance < 0) {
                    clearInterval(timer);
                    this.$emit("timeExpired");
                 
                }
                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
                this.displayHours = hours < 10 ? "0" + hours : hours;
                this.displayDays = days < 10 ? "0" + days : days;
            })
        }
    }

};
</script>

<style scoped>
.timer-row{
    width: 60%;
}
.big-num{
    font-size: 24px;
    font-weight: bold;
}
.clock-label{
    font-size: 10px;
}
</style>