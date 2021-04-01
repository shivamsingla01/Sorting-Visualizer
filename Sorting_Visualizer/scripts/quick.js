function Quick()
{
    c_delay=0;
    console.log("quick");
    quick_sort(0,len-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = bar_size[start] ;//make the first element as pivot element.
    div_update(bars[start],bar_size[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (bar_size[ j ] < piv)
            {
                div_update(bars[j],bar_size[j],"yellow");//Color update

                div_update(bars[i],bar_size[i],"red");//Color update
                div_update(bars[j],bar_size[j],"red");//Color update

                var temp=bar_size[i];
                bar_size[i]=bar_size[j];
                bar_size[j]=temp;

                div_update(bars[i],bar_size[i],"red");//Height update
                div_update(bars[j],bar_size[j],"red");//Height update

                div_update(bars[i],bar_size[i],"blue");//Height update
                div_update(bars[j],bar_size[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(bars[start],bar_size[start],"red");//Color update
    div_update(bars[i-1],bar_size[i-1],"red");//Color update
    
    var temp=bar_size[start];//put the pivot element in its proper place.
    bar_size[start]=bar_size[i-1];
    bar_size[i-1]=temp;

    div_update(bars[start],bar_size[start],"red");//Height update
    div_update(bars[i-1],bar_size[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(bars[t],bar_size[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }