export type PhantomFilter = {
  text: string;
  type: string;
  options: PhantomFilterOption[];
};

export type PhantomFilterOption = { value: string; text: string; isSelected: boolean };
