function Heap()
{
    c_delay=0;
   console.log("heap");
    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(bars[i],bar_size[i],"red");//Color update
    div_update(bars[j],bar_size[j],"red");//Color update

    var temp=bar_size[i];
    bar_size[i]=bar_size[j];
    bar_size[j]=temp;

    div_update(bars[i],bar_size[i],"red");//Height update
    div_update(bars[j],bar_size[j],"red");//Height update

    div_update(bars[i],bar_size[i],"blue");//Color update
    div_update(bars[j],bar_size[j],"blue");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && bar_size[l]>bar_size[largest])
    {
        if(largest!=i)
        {
            div_update(bars[largest],bar_size[largest],"blue");//Color update
        }

        largest=l;

        div_update(bars[largest],bar_size[largest],"red");//Color update
    }

    if(r<n && bar_size[r]>bar_size[largest])
    {
        if(largest!=i)
        {
            div_update(bars[largest],bar_size[largest],"blue");//Color update
        }

        largest=r;

        div_update(bars[largest],bar_size[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(len/2)-1;i>=0;i--)
    {
        max_heapify(len,i);
    }

    for(var i=len-1;i>0;i--)
    {
        swap(0,i);
        div_update(bars[i],bar_size[i],"green");//Color update
        div_update(bars[i],bar_size[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(bars[i],bar_size[i],"blue");//Color update
        div_update(bars[i],bar_size[i],"green");//Color update
    }
    div_update(bars[i],bar_size[i],"green");//Color update
}