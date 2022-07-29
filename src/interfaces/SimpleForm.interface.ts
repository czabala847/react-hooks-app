export interface SimpleForm {
  username: string;
  email: string;
  password?: string;
}

export interface FormDynamic {
  [key: string]: any;
}
