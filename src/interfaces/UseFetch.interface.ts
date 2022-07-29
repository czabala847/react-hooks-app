export interface State {
  data: Quote[];
  isLoading: boolean;
  hasError: string | null;
}

export interface Quote {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
}
