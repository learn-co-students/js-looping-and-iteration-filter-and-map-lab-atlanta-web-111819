// Code your solution here:

function driversWithRevenueOver(driver, num) {
    return driver.filter(function (name) {
        return name.revenue > num
    })
}

// function driverNamesWithRevenueOver(driver, num) {
//     return driver.filter(function (name) {
//        if (name.revenue > num) {
//            return name.name
//        }
//       })
// }

function driverNamesWithRevenueOver(drivers, num) {
    return driversWithRevenueOver(drivers, num).map(driver => driver.name)
}

function exactMatch(drivers, match) {
    return drivers.filter(driver => driver.name === match.name || driver.revenue === match.revenue);
}

function exactMatchToList(drivers, match) {
    return exactMatch(drivers, match).map(driver => driver.name)

}
