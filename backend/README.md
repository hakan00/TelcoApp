<p align="center">
  <img src="https://user-images.githubusercontent.com/53148314/193017087-50462d66-4ef8-4d36-8107-453af542bb2b.png" height="100">
  <h3 align="center">Telco Fake Backend Server</h3>
  <p align="center">
    Fake Backend service of example telecommunication database for frontend tutorials.
  </p>
</p>

## ⚙️ Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ahmet-cetinkaya-instruction/telco-fake-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy `.env.example` and rename as `.env`.
4. Set `JWT_SECRET_KEY` value in `.env`

## 🚀 Usage

Start project

```sh
npm start
```
### 🔀 Routes
**Check [json-server routes](https://github.com/typicode/json-server/blob/master/README.md#routes).**

**In addition:**
| Route           | Comment                               | Body                                   | Header                                   | Return                                   |
| --------------- | ------------------------------------- | -------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| auth/login      | Login process                         | `{userName: string, password: string}` |                                          | `{success:boolean, access_token:string}` |
| auth/test       | Test your access token                |                                        | Authorization: `"Bearer <access_token>"` | `{success:boolean, message:string}`      |
| auth/test-admin | Test your access token has admin role |                                        | Authorization: `"Bearer <access_token>"` | `{success:boolean, message:string}`      |
