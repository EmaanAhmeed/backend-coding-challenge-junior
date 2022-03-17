
/**
 * Group order values by day
 *
 * @param {Array} orders
 * @param {number} startDate
 * @param {number} endDate
 * @return {Array.<number>}
 */
exports.getSalesByDay = function getSalesByDay(orders, startDate, endDate) {
    let resArr=[];
    let res = orders.reduce((result, item) => {
        var date = new Date(item.date);
        var noTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        item.date = noTime;
        if (result[noTime] == null) {
            result[noTime] = []
        }
        result[noTime].push(item);
       return result;
    }, {});
    let diff = endDate - startDate;
    let numDays = Math.round(diff / (1000 * 60 * 60 * 24));
    let day = new Date(startDate)
    for (let i = 0; i < numDays; i++) {
        let strDay=day.toString();
        if(res[strDay]!= undefined){
            let totalValues=0;
            for(let j=0; j<res[strDay].length; j++){
              totalValues+=res[strDay][j]['value'];
            }
            resArr.push(totalValues);
        //   console.log(res[strDay]);  
        }
        else {
resArr.push(0);
        }
        
        day.setDate(day.getDate() + 1);
    }
    console.log(resArr);
return resArr;

}
