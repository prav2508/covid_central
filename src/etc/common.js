
export const formatNumber = (value) => {
    const numberFormatter = new Intl.NumberFormat('en-US');
    return isNaN(value) ? '-' : numberFormatter.format(value);
  };

export const formatNumber_dec = (value) => {
    return Math.round((value + Number.EPSILON) * 100) / 100;
};