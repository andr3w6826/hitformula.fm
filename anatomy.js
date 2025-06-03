// anatomy.js

d3.csv("unique_songs.csv").then((data) => {
  const dimensions = [
    "danceability",
    "energy",
    "valence",
    "acousticness",
    "speechiness",
    "tempo",
    "popularity",
  ];

  const width = 960;
  const height = 400;
  const margin = { top: 30, right: 50, bottom: 10, left: 50 };

  const svg = d3
    .select("#parallel-coords")
    .append("svg")
    .attr("width", width)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const y = {};
  for (let dim of dimensions) {
    y[dim] = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => +d[dim]))
      .range([height, 0]);
  }

  const x = d3
    .scalePoint()
    .range([0, width - margin.left - margin.right])
    .padding(0.5)
    .domain(dimensions);

  function path(d) {
    return d3.line()(dimensions.map((p) => [x(p), y[p](d[p])]));
  }

  svg
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", path)
    .attr("fill", "none")
    .attr("stroke", "#a259ff")
    .attr("stroke-opacity", 0.1)
    .attr("stroke-width", 1);

  svg
    .selectAll(".axis")
    .data(dimensions)
    .join("g")
    .attr("class", "axis")
    .attr("transform", (d) => `translate(${x(d)})`)
    .each(function (d) {
      d3.select(this).call(d3.axisLeft().scale(y[d]));
    })
    .append("text")
    .style("text-anchor", "middle")
    .attr("y", -10)
    .attr("fill", "#ccc")
    .text((d) => d.charAt(0).toUpperCase() + d.slice(1));
});

