let arr = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
  [25, 67],
  [85, 21],
  [220, 88],
];

let width = 500;
let height = 400;
let padding = 20;

let xScale = d3
  .scaleLinear()
  .domain([0, d3.max(arr, (d) => d[0])])
  .range([padding, width - padding]);

let yScale = d3
  .scaleLinear()
  .domain([0, d3.max(arr, (d) => d[1])])
  .range([height - padding, padding]);
let rScale = d3
  .scaleLinear()
  .domain([0, d3.max(arr, (d) => d[1])])
  .range([2, 5]);

let xAxis = d3.axisBottom().scale(xScale);
let yAxis = d3.axisLeft().scale(yScale).ticks(5);
let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .selectAll("circle")
  .data(arr)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", (d) => rScale(d[1]));

svg
  .selectAll("text")
  .data(arr)
  .enter()
  .append("text")
  .text((d) => `(${d[0]},${d[1]})`)
  .attr("x", (d) => xScale(d[0]))
  .attr("y", (d) => yScale(d[1]))
  .attr("fill", "blue");

svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0,${height - padding})`)
  .call(xAxis);

svg
  .append("g")
  .attr("class", "axis")
  .attr("transform", `translate(${padding},0)`)
  .call(yAxis)
