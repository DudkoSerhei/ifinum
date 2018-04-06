const fromArray = (key, array) => {
  const object = {};
  array.forEach((el) => {
    object[el[key]] = el;
  });

  return object;
};

const getFullDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return date.toLocaleDateString('en-GB', options);
};

const getDateISO = (date) => {
  if (Date.parse(date)) {
    return date.toISOString().substring(0, 10);
  }
  return null;
};

const onCutText = (text, symbols) => {
  if (text.length > symbols) {
    return `${text.substring(0, symbols)}...`;
  }

  return text;
};

export const InvoiceUtils = {
  fromArray,
  getDateISO,
  onCutText,
  getFullDate,
};