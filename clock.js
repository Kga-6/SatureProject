const timerEl = document.getElementById("timer")

function formtTime(time){
  return time<10 ? "0"+time : time
}

function startClock(myLunch){
  let isSchoolOver = false

  const timeChain = {

    test:new Date().setHours(24,33),
    test1:new Date().setHours(24,34),
    test2:new Date().setHours(24,35),
    test3:new Date().setHours(24,36),

    warning:new Date().setHours(7,35),
    zeroPeriod:new Date().setHours(8,35),
    homeroom:new Date().setHours(8,48),

    block1:new Date().setHours(9,40),
    block2:new Date().setHours(10,32),
    block3:new Date().setHours(11,24),

    lunch1:new Date().setHours(11,48),
    lunchB:new Date().setHours(12,40),

    lunch2:new Date().setHours(12,16),
    lunchA:new Date().setHours(12,40),

    block5:new Date().setHours(13,32),

    dismissal:new Date().setHours(14,24),
  }

  const countdown = setInterval(function(){

    let myTime = new Date().getTime()
    let timeleft

    if(timeChain.warning-myTime >= 0){
      console.log("warning bell")
      timeleft = timeChain.warning - myTime;
    }else if(timeChain.zeroPeriod-myTime >= 0){
      console.log("zeroPeriod bell")
      timeleft = timeChain.zeroPeriod - myTime;
    }else if(timeChain.homeroom-myTime >= 0){
      timeleft = timeChain.homeroom - myTime;
    }else if(timeChain.block1-myTime >= 0){
      timeleft = timeChain.block1 - myTime;
    }else if(timeChain.block2-myTime >= 0){
      timeleft = timeChain.block2 - myTime;
    }else if(timeChain.block3-myTime >= 0){
      timeleft = timeChain.block3 - myTime;
    }else if(myLunch==="1"){

      if(timeChain.lunch1-myTime >= 0){
        timeleft = timeChain.lunch1 - myTime;
      }else if(timeChain.lunchB-myTime >= 0){
        timeleft = timeChain.lunchB - myTime;
      }else if(timeChain.block5-myTime >= 0){
        timeleft = timeChain.block5 - myTime;
      }else if(timeChain.dismissal-myTime >= 0){
        timeleft = timeChain.dismissal - myTime;
      }else{
        isSchoolOver = true
        clearInterval(countdown)
      }

    }else if(myLunch==="2"){

      if(timeChain.lunch2-myTime >= 0){
        timeleft = timeChain.lunch2 - myTime;
      }else if(timeChain.lunchA-myTime >= 0){
        timeleft = timeChain.lunchA - myTime;
      }else if(timeChain.block5-myTime >= 0){
        timeleft = timeChain.block5 - myTime;
      }else if(timeChain.dismissal-myTime >= 0){
        timeleft = timeChain.dismissal - myTime;
      }else{
        isSchoolOver = true
        clearInterval(countdown)
      }

    }else if(myLunch==="test"){

      if(timeChain.test-myTime >= 0){
        timeleft = timeChain.test - myTime;
      }else if(timeChain.test1-myTime >= 0){
        timeleft = timeChain.test1 - myTime;
      }else if(timeChain.test2-myTime >= 0){
        timeleft = timeChain.test2 - myTime;
      }else if(timeChain.test3-myTime >= 0){
        timeleft = timeChain.test3 - myTime;
      }else{
        isSchoolOver = true
        clearInterval(countdown)
      }

    }

    // Calculating the days, hours, minutes and seconds left
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if(hours<=0){
      timerEl.textContent = `${formtTime(minutes)}:${formtTime(seconds)}`
    }else{
      timerEl.textContent = `${formtTime(hours)}:${formtTime(minutes)}:${formtTime(seconds)}`
    }

    if(isSchoolOver===true){
      timerEl.textContent = "Dismissal"
      dismissal()
    }
  
  },1000)

}
