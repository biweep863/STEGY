document.addEventListener('DOMContentLoaded', function() {
  console.log('Página cargada y lista.');

  // Crear un gráfico de barras simple
  const data = [10, 20, 30, 40, 50];
  const width = 500;
  const height = 100;
  const barWidth = width / data.length;

  const svg = d3.select('#intro')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('margin-top', '2rem'); // Add some margin for better spacing

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', barWidth - 1)
    .attr('height', d => d)
    .attr('x', (d, i) => i * barWidth)
    .attr('y', d => height - d)
    .attr('fill', '#007BFF'); // Blue color for bars

  // Menu functionality
  const menuButton = document.getElementById('menuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const menu = document.getElementById('menu');

  menuButton.addEventListener('click', function() {
    menu.style.display = 'block';
    setTimeout(() => menu.classList.add('show'), 10); // Add delay to trigger transition
  });

  closeMenuButton.addEventListener('click', function() {
    menu.classList.remove('show');
    setTimeout(() => menu.style.display = 'none', 500); // Wait for transition to end
  });
});