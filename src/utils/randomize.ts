export function sample (arr: any[]): any{
  return arr[Math.floor(Math.random() * arr.length)];
}

export function random4Digit(): number {
  return Math.floor(1000 + Math.random() * 9000);
}

export function randomInteger(start: number, end: number): number {
  return Math.floor(start + Math.random() * (end - start));
}
