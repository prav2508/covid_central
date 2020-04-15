
export const formatNumber = (value) => {
    const numberFormatter = new Intl.NumberFormat('en-US');
    return isNaN(value) ? '-' : numberFormatter.format(value);
  };

