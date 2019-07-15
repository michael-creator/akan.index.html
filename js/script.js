var dayOfweek = function(cc, yy, mm, dd){
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
};
var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "november", "december"];
