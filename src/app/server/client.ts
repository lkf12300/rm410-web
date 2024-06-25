import { BehaviorSubject } from "rxjs";
import DB from "./database/db";
import { Live, Post, Product, Replay } from "./database/interface";

class Client {
  db: DB;
  posts = new BehaviorSubject<Post[]>([]);
  product = new BehaviorSubject<Product[]>([]);
  live = new BehaviorSubject<Live>({
    id: "",
    active: false,
    date: "",
    content: "",
    imgurl: "",
    title: "",
    url: "",
  });
  replay = new BehaviorSubject<Replay[]>([]);
  constructor() {
    this.db = new DB();
    this.db.Auth();
  }
}

const client = new Client();
export default client;
