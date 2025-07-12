export interface Memory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location: string;
  tags: string[];
  mood: 'happy' | 'nostalgic' | 'peaceful' | 'excited';
}
