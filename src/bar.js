export default function bar(first, second) {
  console.log(first, second);
  const average = (first.v + second.v) / 2;
  return {
    t: 'num',
    v: average
  };
}

