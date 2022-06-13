let dataset = [
  5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
];

let width = 600;
let height = 250;

let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("width", 25)
  .attr("height", (d) => d * 7)
  .attr("x", (d, i) => i * 27)
  .attr("y", (d, i) => height - d * 7)
  .attr("fill",d=>`rgb(0,0,${Math.round(d*10)})`);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x",  (d,i) => i * 27+3)
  .attr("y", (d) => height - d * 7 + 15)
  .attr("fill", "white");
