const secondsHand=document.querySelector(".seconds"),minutesHand=document.querySelector(".minute"),hoursHand=document.querySelector(".hour");function setDate(){const e=new Date,t=6*e.getSeconds(),n=6*e.getMinutes(),s=e.getHours()/24*360;console.log(t,n,s),secondsHand.style.transform=`translate(-50%) rotate(${t}deg)`,minutesHand.style.transform=`translate(-50%) rotate(${n}deg)`,hoursHand.style.transform=`translate(-50%) rotate(${s}deg)`}setInterval(setDate,1e3);
//# sourceMappingURL=script.js.map