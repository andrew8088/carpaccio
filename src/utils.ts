export const getOnChangeHandler =
  (setter: (val: string) => void) => (evt: any) =>
    setter(evt.target.value);
