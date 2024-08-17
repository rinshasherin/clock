// const dt=new Date()
// console.log(dt)
// console.log(dt.getTime())              // it's the count of seconds from jan 1,1970 00:00:00
// console.log(dt.getHours())
// console.log(dt.getMinutes())
// console.log(dt.getSeconds())
// const hr=dt.getHours()
// const min=dt.getMinutes()
// const sec=dt.getSeconds()

// document.querySelector('#clk').textContent=`${hr}:${min}:${sec}`            // template string which is used for time format(hr:min:sec) 

// this clock work only when the page refreshes, otherwise the time remains same 


// for real time

// function getClock(){
//     const dt=new Date()
//     const hr=dt.getHours()
//     const min=dt.getMinutes()
//     const sec=dt.getSeconds()

//     // document.querySelector('#clk').textContent=`${hr}:${min}:${sec}`
//     clk.textContent=`${hr}:${min}:${sec}`                  // we can use just id(since, id is unique) name instead of document.querySelector('#clk') 

//     setTimeout(()=>{
//         getClock()                // lines 26,27 and 28 for the real time 
//     },1000)                       // there is no value, then 1s will given by default     
//                                   // 1s=1000ms
// }

// getClock()



function getClock(){
    const dt=new Date()
    const hr=dt.getHours()
    const min=dt.getMinutes()
    const sec=dt.getSeconds()
    const hour=(hr%12)<10?"0"+hr%12:hr%12||12

    clk.textContent=`${hour}:${min}:${sec} ${hr>12?'pm':'am'}`                        

    setTimeout(()=>{
        getClock()                // lines 26,27 and 28 for the real time 
    },1000)                       // there is no value, then 1s will given by default     
                                  // 1s=1000ms
}

getClock()