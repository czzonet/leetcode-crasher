export type ListNodeType = {
  val: number;
  next: ListNodeType | null;
};

export const ListNode = (val: number = 0, next: ListNodeType | null = null) => {
  return { val, next };
};
