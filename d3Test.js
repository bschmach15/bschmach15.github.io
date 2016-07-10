var w = 500;
var h = 100;
var barPad = 1;
var data = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
var svg = d3.select("body")
            .append("svg")
            .attr("width",w)
            .attr("height",h);
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x",function(d,i){
        return i * (w / data.length);
    })
    .attr("y", function(d){
        return h - (d*4);
    })
    .attr("width", w / data.length - barPad)
    .attr("height", function(d){
        return d * 4;
    })
    .attr("fill", function(d){
        return "rgb(0,0,"+ (d*10)+")";
    });

svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
        return d;
    })
    .attr("x",function(d,i){
        return i * (w / data.length) + (w / data.length - barPad)/2;
    })
    .attr("y", function(d){
        return h - (d*4) +14;
    })
    .attr("font-family", "Raleway")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle");