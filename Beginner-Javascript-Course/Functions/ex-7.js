function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
    const totalCost = costOfMonitors(rows, columns);
    console.log(totalCost);
  }
  
costOfMonitors(5, 4);
  