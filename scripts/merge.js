function Merge()
{
    c_delay=0;
    console.log("Merge");
    merge_partition(0,len-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            arr[k++]=bar_size[q++];
            div_update(bars[q-1],bar_size[q-1],"red");//Color update
        }
        else if(q>end)
        {
            arr[k++]=bar_size[p++];
            div_update(bars[p-1],bar_size[p-1],"red");//Color update
        }
        else if(bar_size[p]<bar_size[q])
        {
            arr[k++]=bar_size[p++];
            div_update(bars[p-1],bar_size[p-1],"red");//Color update
        }
        else
        {
            arr[k++]=bar_size[q++];
            div_update(bars[q-1],bar_size[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        bar_size[start++]=arr[t];
        div_update(bars[start-1],bar_size[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(bars[mid],bar_size[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}