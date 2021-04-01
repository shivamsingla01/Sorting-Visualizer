function Bubble()
{
    c_delay=0;
    console.log("BUBBLE")
    for(var i=0;i<len-1;i++)
    {
        for(var j=0;j<len-i-1;j++)
        {
            div_update(bars[j],bar_size[j],"yellow");//Color update

            if(bar_size[j]>bar_size[j+1])
            {
                div_update(bars[j],bar_size[j], "red");//Color update
                div_update(bars[j+1],bar_size[j+1], "red");//Color update

                var temp=bar_size[j];
                bar_size[j]=bar_size[j+1];
                bar_size[j+1]=temp;

                div_update(bars[j],bar_size[j], "red");//Height update
                div_update(bars[j+1],bar_size[j+1], "red");//Height update
            }
            div_update(bars[j],bar_size[j], "blue");//Color updat
        }
        div_update(bars[j],bar_size[j], "green");//Color update
    }
    div_update(bars[0],bar_size[0], "green");//Color update

    enable_buttons();
}