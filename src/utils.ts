export const getOnChangeHandler =
  (setter: (val: string) => void) => (evt: any) =>
    setter(evt.target.value);

export const getMaxId = (records: { id: number }[]): number => {
  let max = 0;

  records.forEach((r) => {
    if (r.id > max) max = r.id;
  });

  return max;
};
