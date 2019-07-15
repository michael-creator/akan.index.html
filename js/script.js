var dayOfweek = function(cc, yy, mm, dd){
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
};
if (mm=<0)||(mm>31){
    alert(invalid)
}
if (yy=<0)||(yy>12)
{
    alert(invalid)
}
