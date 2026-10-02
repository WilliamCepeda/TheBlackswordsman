import { LocalizedText } from './localized-text.model';

export interface Chapter {
  readonly id: string;
  readonly number: number;
  readonly title: LocalizedText;
  readonly route: string;
}
