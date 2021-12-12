export interface LayoutModel {
  fileNavigation: string;
  runWindow: string;
  bottomContent: string;
}


export function createInitialLayout(): LayoutModel {
  return {
    fileNavigation: '0',
    runWindow: '0',
    bottomContent: '0'
  } as LayoutModel
}
