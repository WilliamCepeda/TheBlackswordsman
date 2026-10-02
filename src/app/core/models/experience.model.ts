export interface Experience {
  readonly companyKey: string;
  readonly periodKey: string;
  readonly roleKey: string;
  readonly summaryKey?: string;
  readonly detailKeys: readonly string[];
}
