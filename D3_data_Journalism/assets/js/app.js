var svgWidth = 1000;
var svgHeight = 700;

var margin = {top: 20, right: 40, bottom: 60, left: 100};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select('#scatter')
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

var chartGroup = svg.append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`);

d3.csv('/assets/data/data.csv').then(function(data) {

    data.forEach(function(rawdata) {
        rawdata.poverty = +rawdata.poverty;
        rawdata.healthcare = +rawdata.healthcare;

    });

    var xLinearScale = d3.scaleLinear()
                        .domain(d3.extent(data, d => d.poverty))
                        .range([0, width]);
    
    var yLinearScale = d3.scaleLinear()
                        .domain(d3.extent(data, d => d.healthcare))
                        .range([height, 0]);

    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    chartGroup.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(bottomAxis);

    chartGroup.append('g')
            .call(leftAxis);

    var circlesGroup = chartGroup.selectAll('circle')
                                .data(data)
                                .enter()
                                .append('circle')
                                .attr('cx', d => xLinearScale(d.poverty))
                                .attr('cy', d => yLinearScale(d.healthcare))
                                .attr('r', '10')
                                .attr('fill', '#14B6C6')
                                .attr('opacity', '0.5');


    // var toolTip = d3.select('body')
    //                 .append('div')
    //                 .classed('tooltip', true);
                    
    // chartGroup.on('mouseover', function(d) {
    //     toolTip.show(d, this);
    // })
    //     .on('mouseout', function(d) {
    //         toolTip.hide(d);
    //     });

    // chartGroup.call(toolTip);

    

    chartGroup.append('text')
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 40)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Lacks Healthcare (%)");

    chartGroup.selectAll(null)
    .data(data)
    .enter()
    .append('text')
    .attr('x', d => xLinearScale(d.poverty) - 8)
    .attr('y', d => yLinearScale(d.healthcare))
    .text(function(d) {return d.abbr;})
    .attr('font-family', 'sans-serif')
    .attr('font-size', '10px')
    .attr('fill', 'white');

    chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    .attr("class", "axisText")
    .text("In Poverty (%)");
}).catch(function(error) {
    console.log(error);

});