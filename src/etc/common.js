
export const formatNumber = (value) => {
    const numberFormatter = new Intl.NumberFormat('en-US');
    return isNaN(value) ? '-' : numberFormatter.format(value);
  };

export const formatNumber_dec = (value) => {
    return Math.round((value + Number.EPSILON) * 100) / 100;
};


export const lastUpdated = (value)=>{
const indiaTime = new Date(value);//.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
const time_now = new Date();
const diff = Math.round(((Math.abs(time_now.getTime() - indiaTime.getTime()) / 36e5)+ Number.EPSILON) * 1) / 1;
//const diff_hrs = diff + Number.EPSILON) * 1) / 1;
return diff;
}