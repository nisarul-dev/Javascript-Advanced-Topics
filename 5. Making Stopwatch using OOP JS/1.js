//## 4. Making Stopwatch using OOP JS

function Stopwatch() {
    this.value = { minutes: 0, seconds: 0, state: 0 };

    // Reset Method
    this.reset = function() {
        this.value.minutes = 0;
        this.value.seconds = 0;
        this.value.state = 0;
        clearInterval(this.value.timer);
    }

    // Start Method
    this.start = function() {
        if(this.value.state == 1)
            throw new Error(`Stopwatch is already running!`);

        this.value.state = 1;
        const value = this.value;

        this.value.timer = setInterval(function() {
            value.seconds ++;
            value.minutes =  value.seconds / 60 ;
        }, 1000);

    }

    // Display Stop Method
    this.stop = function() {
        if(this.value.state == 3)
            throw new Error(`Stopwatch is already stoped!`);
        if(this.value.state == 0)
            throw new Error(`Stopwatch is not even running!`);

        this.value.state = 3;
        clearInterval(this.value.timer);
    }

    // Display time Method
    this.show = function() {
        if(this.value.state == 0)
            throw new Error(`Stopwatch isn't started yet. Use start() method to start.`);
        
        const minute = Math.floor(this.value.minutes);
        const second = this.value.seconds - minute*60;
        if(this.value.state == 3) 
            stopMsg = "  [Notice: Stopwatch is paused. Use start() method to resume.]";
        else
            stopMsg = "";
        
        console.log(`${minute}:${second}` + stopMsg);
    }

}

const sw1 = new Stopwatch();


/*
    use browser console to check it out
*/
