let width = 500;
let height = 200;

let arr = [10, 15, 20, 25, 30];

let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .selectAll("rect")
  .data(arr)
  .enter()
  .append("rect")
  .attr("width", 30)
  .attr("fill", (d, i) => `rgb(${d * i - 2},${i * 10},${i * d})`)
  .attr("height", (d) => d * 5)
  .attr("x", (d, i) => i * 40)
  .attr("y", (d) => height - d * 5);

svg
  .selectAll("text")
  .data(arr)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("y", (d) => height - d * 5 +20)
  .attr("x", (d, i) => i * 40+6)
  .attr('fill','white')
