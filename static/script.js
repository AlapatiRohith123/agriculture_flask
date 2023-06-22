function fun(ph)
{
    if(ph.value>14.0 || ph.value<0.0)
    {
        alert("Please enter the correct Ph value. Ph value can only range from 0 to 14");
        ph.value="";
    }
}