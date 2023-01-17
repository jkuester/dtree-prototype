const getValue = function(obj) {
  let val;
  if (obj.t === 'arr') {
    val = obj.v && obj.v.length && obj.v[0];
  } else {
    val = obj.v;
  }
  if (!val) {
    return 0;
  }
  const parsed = parseInt(val.textContent);
  return isNaN(parsed) ? 0 : parsed;
};

export default function foo(first, second) {
  const difference = getValue(first) - getValue(second);
  return {
    t: 'num',
    v: difference
  };
}

