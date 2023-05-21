function findMatching(drivers, name) {
  const driverNames = drivers.filter((item) => {
    return item === name || item === name.toLowerCase();
  });
  return driverNames ? driverNames : [];
}
function fuzzyMatch(drivers, name) {
  const driverNames = drivers.filter((item) => {
    return item.slice(0,2) === name ;
  });
  return driverNames ? driverNames : [];
}

function matchName(drivers, name) {
  const driverNames = drivers.filter((item) => {
    return item.name === name ;
  });
  return driverNames ? driverNames : [];
}
