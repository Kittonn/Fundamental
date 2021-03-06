let dataset = [
  5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
];

let width = 600;
let height = 250;
let xScale = d3
  .scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, width])
  .paddingInner(0.05);
let yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, height]);
let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let sortBar = () => {
  svg
    .selectAll("rect")
    .sort((a, b) => {
      return d3.ascending(a, b);
    })
    .transition()
    .duration(1000)
    .attr("x", (d, i) => {
      return xScale(i);
    });
};

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => yScale(d))
  .attr("x", (d, i) => xScale(i))
  .attr("y", (d, i) => height - yScale(d))
  .attr("fill", (d) => `rgb(0,0,${Math.round(d * 10)})`)
  .on("mouseover", function (d){
    let xPosition =
      parseFloat(d3.select(this).attr("x")) + xScale.bandwidth() / 2;
    let yPosition = parseFloat(d3.select(this).attr("y")) / 2 + height / 2;

    
    d3.select("#tooltip")
      .style("left", xPosition + "px")
      .style("top", yPosition + "px")
      .select("#value")
      .text(d);

    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function () {
    d3.select("#tooltip").classed("hidden", true);
  });
// .on("click", sortBar);

// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text((d) => d)
//   .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 4)
//   .attr("y", (d) => height - yScale(d) + 20)
//   .attr("font-size", "11px")
//   .attr("fill", "white");

// d3.select("p").on('click',sortBar)
d3.select("p").on("click", () => {
  dataset = [
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 5, 10, 13, 19, 21, 25, 22, 18, 15,
    13,
  ];
  svg
    .selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr("y", (d) => height - yScale(d))
    .attr("height", (d) => yScale(d))
    .attr("fill", (d) => `rgb(0,0,${Math.round(d * 10)})`);
  svg
    .selectAll("text")
    .data(dataset)
    .transition()
    .duration(1000)
    .text((d) => d)
    .attr("y", (d) => height - yScale(d) + 20);
});
