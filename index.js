function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driverData) {
        return driverData.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
            .map(function(driverData) {
                return driverData.name;
            });
}

function exactMatch(drivers, attributes) {
    return drivers.filter(function(driverData) {
        let match = true
        for (const attribute in attributes) {
            if (driverData[attribute] !== attributes[attribute]) {
                match = false;
                break;
            }
        }
        return match;
    })
}

function exactMatchToList(drivers, attributes) {
    return exactMatch(drivers, attributes)
            .map(function(driverData) {
                return driverData.name;
            });
}