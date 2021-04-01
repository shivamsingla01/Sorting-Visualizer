
function Selection_sort()
{
    c_delay=0;
    console.log("selction");
    for(var i=0;i<len-1;i++)
    {
        div_update(bars[i],bar_size[i],"red");//Color update

        min_index=i;

        for(var j=i+1;j<len;j++)
        {
            div_update(bars[j],bar_size[j],"yellow");//Color update

            if(bar_size[j]<bar_size[min_index])
            {
                if(min_index!=i)
                {
                    div_update(bars[min_index],bar_size[min_index],"blue");//Color update
                }
                min_index=j;
                div_update(bars[min_index],bar_size[min_index],"red");//Color update
            }
            else
            {
                div_update(bars[j],bar_size[j],"blue");//Color update
            }
        }
        
        if(min_index!=i)
        {
            var temp=bar_size[min_index];
            bar_size[min_index]=bar_size[i];
            bar_size[i]=temp;

            div_update(bars[min_index],bar_size[min_index],"red");//Height update
            div_update(bars[i],bar_size[i],"red");//Height update
            div_update(bars[min_index],bar_size[min_index],"blue");//Color update
        }
        div_update(bars[i],bar_size[i],"green");//Color update
    }
    div_update(bars[i],bar_size[i],"green");//Color update

    enable_buttons();
}

