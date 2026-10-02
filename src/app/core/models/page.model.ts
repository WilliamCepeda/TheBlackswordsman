export type PageKind = 'cover' | 'chapter' | 'project' | 'back-cover';

export interface BookPage {
  readonly id: string;
  readonly chapterId: string;
  readonly kind: PageKind;
  readonly pageNumber?: number;
}
