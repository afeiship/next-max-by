type MayByString = (array: any[], key: string) => any;
type MayByFunction = (array: any[], key: (value: any) => any) => any;

interface NxStatic {
  maxBy: MayByFunction & MayByString;
}
