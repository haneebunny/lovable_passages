// 첫 문장만 뽑아내는 함수
export function extractFirstSentence(text: string): string {
  const matchResult = text.match(/[^.]+./);
  return matchResult ? matchResult[0].trim() : "";
}
