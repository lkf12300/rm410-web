export interface Post {
  postid: string;
  title: string;
  content: string;
  imgurl: string[];
  active: boolean;
  data: string;
}

export interface Product {
  postid: string;
  title: string;
  content: string;
  imgurl: string[];
  contact: {
    phone: string;
    email: string;
    ig: string;
    whatsapp: string;
    telegram: string;
    signal: string;
  };
  active: boolean;
  data: string;
}

export interface Replay {
  id: string;
  title: string;
  content: string;
  url: string;
  imgurl: string;
  active: boolean;
  date: string;
}

export interface Live {
  id: string;
  title: string;
  content: string;
  url: string;
  imgurl: string;
  active: boolean;
  date: string;
}
