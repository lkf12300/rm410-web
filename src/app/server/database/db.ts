import axios from "axios";
import { MongoClient } from "mongodb";

class DB {
  client: MongoClient;
  authed: boolean;
  constructor() {
    const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.nijso0z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    this.client = new MongoClient(url);
    this.authed = false;

    // this.data = JSON.stringify({
    //   collection: "post",
    //   database: "rm-410-web",
    //   dataSource: "Cluster0",
    // });

    // this.config = {
    //   method: "post",
    //   url: "https://us-east4.gcp.data.mongodb-api.com/app/data-gnhbngi/endpoint/data/v1/action/find",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Request-Headers": "*",
    //     "api-key": process.env.MONGODB_API_KEY,
    //   },
    //   data: this.data,
  }

  async Auth() {
    if (this.authed) return { connect: "connected" };

    let result = {};
    try {
      await this.client.connect().then((v) => {
        result = { connect: "success" };
        this.authed = true;
      });
    } catch (error) {
      result = { connect: "fail" };
    }
    return result;
  }

  async GetPosts() {
    if (!this.authed) {
      await this.Auth();
    }
    const collection = this.client.db("rm-410-web").collection("post");
    const posts = await collection.find().toArray();
    return posts ? posts : undefined;
  }

  async GetProducts() {
    if (!this.authed) {
      await this.Auth();
    }
    // this.post = axios(this.config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     return response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return "error";
    //   });
  }
}
export default DB;
