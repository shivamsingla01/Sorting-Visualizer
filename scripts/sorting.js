

var arr_size=document.getElementById('sz');
var len=arr_size.value;
//console.log(sz);
var algo_speed=document.getElementById('speed');
var gen=document.querySelector(".generate");
var algo_button=document.querySelectorAll(".algo button");

var bar_size=[];
var bars=[];
var margin;
var cont=document.getElementById('bar_container');

arr_size.addEventListener("input",update_array_size);
gen.addEventListener('click',generate_array);

function generate_array(){
    console.log("Hello");
   cont.innerHTML="";
   for(var i=0;i<len;i++){
       bar_size[i]=Math.floor(Math.random()*0.5*(arr_size.max-arr_size.min))+20;
       //console.log(bar_size[i]);
       bars[i]=document.createElement("div");
       cont.appendChild(bars[i]);
       margin=0.1;
       bars[i].style="margin : 0% "+margin+"%; background-color: blue; width: "+ (100/len-(2*margin)) + "%; height:"+ (bar_size[i])+"%;";
   }
}

function update_array_size(){
    
    len=arr_size.value;
    console.log(len);
    generate_array();

}
window.onload=update_array_size();

for(var i=0;i<algo_button.length;i++){
   algo_button[i].addEventListener('click',runalgo);
}

function disable_buttons()
{
    for(var i=0;i<algo_button.length;i++)
    {
        //algo_buttons[i].classList=[];
       // algo_button[i].classList.add("butt_locked");

       algo_button[i].disabled=true;
        arr_size.disabled=true;
        gen.disabled=true;
        algo_speed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    //this.classList.add("butt_selected");
    console.log(this);
    switch(this.innerHTML)
    {
        case "BUBBLE":Bubble();
                        break;
        case "SELECTION":Selection_sort();
                        break;
        case "INSERTION":Insertion();
                        break;
        case "MERGE":Merge();
                        break;
        case "QUICK":Quick();
                        break;
        case "HEAP":Heap();
                        break;
    }
}


var speed=1000;

algo_speed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=algo_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(len/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(len/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin + "%; width:" + (100/len-(2*margin)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_button.length;i++)
        {
            //algo_button[i].classList=[];
            //algo_button[i].classList.add("butt_unselected");

            algo_button[i].disabled=false;
            arr_size.disabled=false;
            gen.disabled=false;
            algo_speed.disabled=false;
        }
    },c_delay+=delay_time);
}
