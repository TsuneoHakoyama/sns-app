# SNS-App
###### 概要
###### 会員登録しログインすることで投稿の閲覧、追加および削除ができる
###### バックエンドにSupabaseを利用する
###### Home画面
![Home画面のスクリーンショット](Top-page.png?raw=true)

## 機能一覧
###### 会員登録：http://localhost:5173/signupにアクセスしユーザー名、メールアドレス、パスワードを登録することができる
###### ログイン：http://localhost:5173/signinにアクセスし登録されたメールアドレスとパスワードを使って認証されるとホーム画面に遷移
###### ホーム画面では投稿のタイムラインとログインしているユーザー情報が表示される
###### 入力欄に投稿内容を入力しPostボタンをクリックすると投稿がタイムラインに表示される
###### タイムラインはpaginationを使って4件/pageで表示される
###### ログインユーザーの投稿には削除ボタンが表示され削除が可能
###### ホーム画面のログアウトボタンをクリックすることでログアウト可能

## 使用技術
###### react: 19.1.0
###### react-dom: 19.1.0
###### react-router: 7.6.2
###### tailwindcss: 3.4.17
###### vite: 6.3.5

## 環境構築
###### 1. $ git clone git@github.com:TsuneoHakoyama/sns-app.git
###### 2. $ cd sns-app
###### 3. $ cp .env.example .env
###### 4. $ npm install
###### 5. $ npm run dev
###### 6. http://localhost:5173にアクセス
###### user1@example.com, user2@example.com, user3@gmail.comのいずれかのメールアドレスでログイン可能。passwordは”password”
