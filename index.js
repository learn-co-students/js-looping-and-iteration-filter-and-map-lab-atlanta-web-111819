// Code your solution here:
function driversWithRevenueOver(array, number){
    return array.filter(function(driver){
        return driver["revenue"] > number;
    })

}

function driverNamesWithRevenueOver(array, number){
   return driversWithRevenueOver(array, number).map(function(driver){
       return driver.name;
   })
}


function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
      let matches = false;
  
      for (const key in matcher) {
        matches = driver[key] === matcher[key];
      }
  
      return matches;
    });
  }
  
  function exactMatchToList (drivers, matcher) {
    return exactMatch(drivers, matcher)
      .map(function (driver) {
        return driver.name;
      });
  }