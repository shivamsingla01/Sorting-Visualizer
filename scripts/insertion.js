function Insertion()
{
    c_delay=0;
    console.log("insertion");
    for(var j=0;j<len;j++)
    {
        div_update(bars[j],bar_size[j],"yellow");//Color update

        var key= bar_size[j];
        var i=j-1;
        while(i>=0 && bar_size[i]>key)
        {
            div_update(bars[i],bar_size[i],"red");//Color update
            div_update(bars[i+1],bar_size[i+1],"red");//Color update

            bar_size[i+1]=bar_size[i];

            div_update(bars[i],bar_size[i],"red");//Height update
            div_update(bars[i+1],bar_size[i+1],"red");//Height update
    
            div_update(bars[i],bar_size[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(bars[i+1],bar_size[i+1],"yellow");//Color update
            }
            else
            {
                div_update(bars[i+1],bar_size[i+1],"blue");//Color update
            }
            i-=1;
        }
        bar_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(bars[t],bar_size[t],"green");//Color update
        }
    }
    div_update(bars[j-1],bar_size[j-1],"green");//Color update

    enable_buttons();
}