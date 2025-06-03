

// function initArtistBarRace() {
//     const svg = d3.select("#rise-hit-chart");
//     const margin = { top: 20, right: 180, bottom: 30, left: 180 };
//     const width = +svg.attr("width") - margin.left - margin.right;
//     const height = +svg.attr("height") - margin.top - margin.bottom;
//     const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
  
//     d3.csv("artist_year_scores.csv").then(raw => {
//       const data = raw.map(d => ({
//         name: d.name,
//         year: +d.year,
//         score: +d.year_end_score,
//         main_genre: d.main_genre,
//         image_url: d.image_url
//       }));
  
//       const years = [...new Set(data.map(d => d.year))].sort((a, b) => a - b);
//       let yearIndex = 0;
  
//       const x = d3.scaleLinear().range([0, width]);
//       const y = d3.scaleBand().range([0, height]).padding(0.1);
  
//       const genreColor = d3.scaleOrdinal()
//         .domain([...new Set(data.map(d => d.main_genre))])
//         .range(d3.schemeTableau10);
  
//       const render = (year) => {
//         const yearData = data.filter(d => d.year === year)
//           .sort((a, b) => b.score - a.score)
//           .slice(0, 10);
  
//         x.domain([0, d3.max(yearData, d => d.score)]);
//         y.domain(yearData.map(d => d.name));
  
//         // Axes
//         g.selectAll(".y-axis").data([null]).join("g")
//           .attr("class", "y-axis")
//           .call(d3.axisLeft(y));
  
//         g.selectAll(".x-axis").data([null]).join("g")
//           .attr("class", "x-axis")
//           .attr("transform", `translate(0,${height})`)
//           .call(d3.axisBottom(x).ticks(5));
  
//         // Bars
//         const bars = g.selectAll("rect").data(yearData, d => d.name);
  
//         bars.join(
//           enter => enter.append("rect")
//             .attr("x", 0)
//             .attr("y", d => y(d.name))
//             .attr("height", y.bandwidth())
//             .attr("width", 0)
//             .attr("fill", d => genreColor(d.main_genre || "Other"))
//             .call(enter => enter.transition().duration(1600)
//               .attr("width", d => x(d.score))
//             ),
//           update => update.call(update => update.transition().duration(1600)
//             .attr("y", d => y(d.name))
//             .attr("width", d => x(d.score))
//           ),
//           exit => exit.call(exit => exit.transition().duration(500)
//             .attr("width", 0)
//             .remove())
//         );
  
//         // Score Labels
//         const labels = g.selectAll(".label").data(yearData, d => d.name);
  
//         labels.join(
//           enter => enter.append("text")
//             .attr("class", "label")
//             .attr("x", 0)
//             .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
//             .style("fill", "#fff")
//             .style("font-size", "12px")
//             .text(d => d3.format(",")(d.score))
//             .call(enter => enter.transition().duration(1600)
//               .attr("x", d => x(d.score) + 5)
//             ),
//           update => update.call(update => update.transition().duration(1600)
//             .attr("x", d => x(d.score) + 5)
//             .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
//             .text(d => d3.format(",")(d.score))
//           ),
//           exit => exit.remove()
//         );
  
//         // Headshots
//         const images = g.selectAll("image").data(yearData, d => d.name);
  
//         images.join(
//           enter => enter.append("image")
//             .attr("href", d => d.image_url)
//             .attr("x", d => x(d.score) - y.bandwidth())
//             .attr("y", d => y(d.name))
//             .attr("width", y.bandwidth())
//             .attr("height", y.bandwidth())
//             .attr("clip-path", "circle(40%)"),
//           update => update.call(update => update.transition().duration(1600)
//             .attr("x", d => x(d.score) - y.bandwidth())
//             .attr("y", d => y(d.name))
//           ),
//           exit => exit.remove()
//         );
  
//         // Year Labels
//         g.selectAll(".year-top").data([year]).join("text")
//           .attr("class", "year-top")
//           .attr("x", width)
//           .attr("y", -10)
//           .attr("text-anchor", "end")
//           .attr("font-size", "24px")
//           .text(year);
  
//         g.selectAll(".year-bottom").data([year]).join("text")
//           .attr("class", "year-bottom")
//           .attr("x", width)
//           .attr("y", height + 30)
//           .attr("text-anchor", "end")
//           .attr("font-size", "20px")
//           .style("fill", "#fff")
//           .text(year);
//       };
  
//       d3.interval(() => {
//         if (yearIndex < years.length) {
//           render(years[yearIndex]);
//           yearIndex++;
//         }
//       }, 2000); // Slowed down interval to 2 seconds
//     });
//   }
  
//   initArtistBarRace();

// function initArtistBarRace() {
//     const svg = d3.select("#rise-hit-chart");
//     const margin = { top: 20, right: 180, bottom: 30, left: 180 };
//     const width = +svg.attr("width") - margin.left - margin.right;
//     const height = +svg.attr("height") - margin.top - margin.bottom;
//     const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
  
//     d3.csv("artist_year_scores.csv").then(raw => {
//       const data = raw.map(d => ({
//         name: d.name,
//         year: +d.year,
//         score: +d.year_end_score,
//         main_genre: d.main_genre,
//         image_url: d.image_url
//       }));
  
//       const years = [...new Set(data.map(d => d.year))].sort((a, b) => a - b);
//       let yearIndex = 0;
  
//       const x = d3.scaleLinear().range([0, width]);
//       const y = d3.scaleBand().range([0, height]).padding(0.1);
  
//       const genreColor = d3.scaleOrdinal()
//         .domain([...new Set(data.map(d => d.main_genre))])
//         .range(d3.schemeTableau10);
  
//       const render = (year) => {
//         const yearData = data.filter(d => d.year === year)
//           .sort((a, b) => b.score - a.score)
//           .slice(0, 10);
  
//         x.domain([0, d3.max(yearData, d => d.score)]);
//         y.domain(yearData.map(d => d.name));
  
//         // Axes
//         g.selectAll(".y-axis").data([null]).join("g")
//           .attr("class", "y-axis")
//           .call(d3.axisLeft(y));
  
//         g.selectAll(".x-axis").data([null]).join("g")
//           .attr("class", "x-axis")
//           .attr("transform", `translate(0,${height})`)
//           .call(d3.axisBottom(x).ticks(5));
  
//         // Bars
//         const bars = g.selectAll("rect").data(yearData, d => d.name);
  
//         bars.join(
//           enter => enter.append("rect")
//             .attr("x", 0)
//             .attr("y", d => y(d.name))
//             .attr("height", y.bandwidth())
//             .attr("width", 0)
//             .attr("fill", d => genreColor(d.main_genre || "Other"))
//             .transition().duration(2000).ease(d3.easeCubicOut)
//             .attr("width", d => x(d.score)),
//           update => update.transition().duration(2000).ease(d3.easeCubicOut)
//             .attr("y", d => y(d.name))
//             .attr("width", d => x(d.score)),
//           exit => exit.transition().duration(500)
//             .attr("width", 0)
//             .remove()
//         );
  
//         // Score Labels
//         const labels = g.selectAll(".label").data(yearData, d => d.name);
  
//         labels.join(
//           enter => enter.append("text")
//             .attr("class", "label")
//             .attr("x", 0)
//             .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
//             .style("fill", "#fff")
//             .style("font-size", "12px")
//             .text(d => d3.format(",")(d.score))
//             .transition().duration(2000).ease(d3.easeCubicOut)
//             .attr("x", d => x(d.score) + 5),
//           update => update.transition().duration(2000).ease(d3.easeCubicOut)
//             .attr("x", d => x(d.score) + 5)
//             .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
//             .text(d => d3.format(",")(d.score)),
//           exit => exit.remove()
//         );
  
//         // Headshots
//         const images = g.selectAll("image").data(yearData, d => d.name);
  
//         images.join(
//           enter => enter.append("image")
//             .attr("href", d => d.image_url)
//             .attr("x", d => x(d.score) - y.bandwidth())
//             .attr("y", d => y(d.name))
//             .attr("width", y.bandwidth())
//             .attr("height", y.bandwidth())
//             .attr("clip-path", "circle(40%)")
//             .style("opacity", 0)
//             .transition().delay(2000).duration(500).style("opacity", 1),
//           update => update.transition().duration(2000).ease(d3.easeCubicOut)
//             .attr("x", d => x(d.score) - y.bandwidth())
//             .attr("y", d => y(d.name)),
//           exit => exit.remove()
//         );
  
//         // Year Labels
//         g.selectAll(".year-top").data([year]).join("text")
//           .attr("class", "year-top")
//           .attr("x", width)
//           .attr("y", -10)
//           .attr("text-anchor", "end")
//           .attr("font-size", "24px")
//           .text(year);
  
//         g.selectAll(".year-bottom").data([year]).join("text")
//           .attr("class", "year-bottom")
//           .attr("x", width)
//           .attr("y", height + 30)
//           .attr("text-anchor", "end")
//           .attr("font-size", "20px")
//           .style("fill", "#fff")
//           .text(year);
//       };
  
//       d3.interval(() => {
//         if (yearIndex < years.length) {
//           render(years[yearIndex]);
//           yearIndex++;
//         }
//       }, 2500); // Extended interval to match full animation time
//     });
//   }
  
//   initArtistBarRace();
  
function initArtistBarRace() {
    const svg = d3.select("#rise-hit-chart");
    const margin = { top: 20, right: 180, bottom: 30, left: 180 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
  
    d3.csv("artist_year_scores.csv").then(raw => {
      const data = raw.map(d => ({
        name: d.name,
        year: +d.year,
        score: +d.year_end_score,
        main_genre: d.main_genre,
        image_url: d.image_url
      }));
  
      const years = [...new Set(data.map(d => d.year))].sort((a, b) => a - b);
      let yearIndex = 0;
  
      const x = d3.scaleLinear().range([0, width]);
      const y = d3.scaleBand().range([0, height]).padding(0.1);
  
      const genreColor = d3.scaleOrdinal()
        .domain([...new Set(data.map(d => d.main_genre))])
        .range(d3.schemeTableau10);
  
      const render = (year) => {
        const yearData = data.filter(d => d.year === year)
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
  
        x.domain([0, d3.max(yearData, d => d.score)]);
        y.domain(yearData.map(d => d.name));
  
        g.selectAll(".y-axis").data([null]).join("g")
          .attr("class", "y-axis")
          .call(d3.axisLeft(y));
  
        g.selectAll(".x-axis").data([null]).join("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0,${height})`)
          .call(d3.axisBottom(x).ticks(5));
  
        const bars = g.selectAll("rect").data(yearData, d => d.name);
  
        bars.join(
          enter => enter.append("rect")
            .attr("x", 0)
            .attr("y", height) // start below the chart
            .attr("height", y.bandwidth())
            .attr("width", 0)
            .attr("fill", d => genreColor(d.main_genre || "Other"))
            .transition().duration(2000).ease(d3.easeCubicOut)
            .attr("y", d => y(d.name))
            .attr("width", d => x(d.score)),
          update => update.transition().duration(2000).ease(d3.easeCubicOut)
            .attr("y", d => y(d.name))
            .attr("width", d => x(d.score)),
          exit => exit.transition().duration(500)
            .attr("y", height) // move below chart
            .attr("width", 0)
            .remove()
        );
  
        const labels = g.selectAll(".label").data(yearData, d => d.name);
  
        labels.join(
          enter => enter.append("text")
            .attr("class", "label")
            .attr("x", 0)
            .attr("y", height)
            .style("fill", "#fff")
            .style("font-size", "12px")
            .text(d => d3.format(",")(d.score))
            .transition().duration(2000).ease(d3.easeCubicOut)
            .attr("x", d => x(d.score) + 5)
            .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4),
          update => update.transition().duration(2000).ease(d3.easeCubicOut)
            .attr("x", d => x(d.score) + 5)
            .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
            .text(d => d3.format(",")(d.score)),
          exit => exit.remove()
        );
  
        const images = g.selectAll("image").data(yearData, d => d.name);
  
        images.join(
          enter => enter.append("image")
            .attr("href", d => d.image_url)
            .attr("x", d => x(d.score) - y.bandwidth())
            .attr("y", height) // start below chart
            .attr("width", y.bandwidth())
            .attr("height", y.bandwidth())
            .attr("clip-path", "circle(40%)")
            .style("opacity", 0)
            .transition().delay(2000).duration(500).ease(d3.easeCubicOut)
            .attr("y", d => y(d.name))
            .style("opacity", 1),
          update => update.transition().duration(2000).ease(d3.easeCubicOut)
            .attr("x", d => x(d.score) - y.bandwidth())
            .attr("y", d => y(d.name)),
          exit => exit.transition().duration(500)
            .attr("y", height)
            .style("opacity", 0)
            .remove()
        );
  
        g.selectAll(".year-top").data([year]).join("text")
          .attr("class", "year-top")
          .attr("x", width)
          .attr("y", -10)
          .attr("text-anchor", "end")
          .attr("font-size", "24px")
          .text(year);
  
        g.selectAll(".year-bottom").data([year]).join("text")
          .attr("class", "year-bottom")
          .attr("x", width)
          .attr("y", height + 30)
          .attr("text-anchor", "end")
          .attr("font-size", "20px")
          .style("fill", "#fff")
          .text(year);
      };
  
      d3.interval(() => {
        if (yearIndex < years.length) {
          render(years[yearIndex]);
          yearIndex++;
        }
      }, 2500);
    });
  }
  
  initArtistBarRace();
  