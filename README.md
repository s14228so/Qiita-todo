#  Qiita Todo Appチュートリアル用のリポジトリ


## Environment
*Rails 6.0.2.1 
*ruby 2.5.3  
*npm 6.13.4 

## SetUp

```
$ git clone https://github.com/s14228so/Qiita-todo.git
```

---Rails---

```
$ cd todo-api
$ bundle install
```


---Nuxt---

```
$ cd todo-web
$ npm install
```

※env.development.jsをプロジェクトルートに作成し、
FirebaseのAPI_KEYなどを追記する

```env.development.js
module.exports = {
    API_ENDPOINT: 'http://localhost:8080',
    API_KEY: "",
    AUTH_DOMAIN: "",
    PROJECT_ID: "",
    DATABASE_URL: "",
    STORAGE_BUCKET: "",
    APP_ID: "",
    MESSAGE_SENDER_ID: "",
}
```

```
$ npm run dev 
```
