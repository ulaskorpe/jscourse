var models = [
    {
       name:"bmw 418d",
        image:"img/bmw.jpg",
        link :"https://askubuntu.com/questions/1115061/how-do-i-solve-incorrect-permission-on-usr-lib-policykit-1-polkit-agent-helper",
    
        text : "Pellentesque lobortis ornare felis, ac venenatis urna pulvinar feugiat. Ut vitae consequat orci. Curabitur id pulvinar elit. Nam purus neque, facilisis a sodales a,"
    },
    {
        name:"honda",
         image:"img/honda.jpg",
         link :"https://askubuntu.com/questions/1115061/how-do-i-solve-incorrect-permission-on-usr-lib-policykit-1-polkit-agent-helper",
        text : "Proin egestas tristique pharetra. Suspendisse euismod auctor iaculis. Sed luctus blandit volutpat. Proin mattis, augue in tempor vehicula, sapien risus varius elit"
 
     },
     {
        name:"mazda",
         image:"img/mazda.jpg",
         link :"https://askubuntu.com/questions/1115061/how-do-i-solve-incorrect-permission-on-usr-lib-policykit-1-polkit-agent-helper",
     
         text : "Nullam magna dolor, facilisis nec finibus sed, semper ac urna. Mauris massa enim, suscipit in dapibus ut, aliquet laoreet diam. Aliquam efficitur massa id cursus varius. Duis tempor ultrices diam"
     },
     {
        name:"skoda",
         image:"img/skoda.jpg",
         link :"https://askubuntu.com/questions/1115061/how-do-i-solve-incorrect-permission-on-usr-lib-policykit-1-polkit-agent-helper",
     
         text : "Morbi fringilla ac dui in vestibulum. Proin egestas tristique pharetra. Suspendisse euismod auctor iaculis. Sed luctus blandit volutpat. Proin mattis,"
     },
     {
        name:"volvo",
         image:"img/volvo.jpg",
         link :"https://askubuntu.com/questions/1115061/how-do-i-solve-incorrect-permission-on-usr-lib-policykit-1-polkit-agent-helper",
         text : "facilisis a sodales a, condimentum at sem. Sed molestie lacus non sodales efficitur. Donec vitae pretium ex. Nullam nisl ipsum, molestie ac consequat non, maximus et libero. Nullam magna dolor, facilisis nec finibus sed, semper ac urna. Mauris massa enim, suscipit in dapibus ut"
 
     }
]
var index = 0;

var slaytCount = models.length;
var interval ;
var settings = {
    duration: 2000,
    random : false, 
}

init(settings);

document.querySelector('#left-arrow').addEventListener('click',function(){
      index--  ;
    showSlide(index);
    ;
 });
 document.querySelector('#right-arrow').addEventListener('click',function(){
      index++;
     showSlide(index);
     
 });

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseenter',function(){
       // console.log(interval);
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseleave',function(){
        console.log(interval);
        init(settings);
    })
});

function init(settings){
   // setTimeout :: acts once
   var prev;
  interval= setInterval(function(){      
    if(settings.random){
        do{
            index = Math.floor( Math.random()*slaytCount);
        }while(index==prev);
        prev = index;
        
    }else{
            index = (slaytCount == index +1 )? 0 : ++index;
    }
    showSlide(index);
   },settings.duration);
}
 function showSlide(i){
    index = i ;
    index = (index <0 )? slaytCount-1 : ((index >= slaytCount )? 0 : index);
    let maxlength = 180;
    let txt = models[index].text.length < maxlength ? models[index].text : models[index].text.slice(0, maxlength) + '...'
 
document.querySelector("#slider-image").setAttribute('src',models[index].image);
document.querySelector("#card-link").setAttribute('href',models[index].link);
document.querySelector("#card-title").textContent= models[index].name;
document.querySelector("#card-text").textContent=txt ;
//console.log(index)
}
