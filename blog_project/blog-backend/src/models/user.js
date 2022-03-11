import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

// 모델 인스턴스 메서드를 설정할 때에는 비동기 함수로 설정한다. (bcrypt를 사용해서 그런것인가?)
// 스키마의 methods를 사용하여 정의한다.

// 모델 스태틱 메서드를 설정할 때는 비동기 함수로 설정하지 않아도 된다.

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; //true or false
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};
//응답할 데이터에서 hashedPassword 필드 제거(보안상)
UserSchema.methods.serialize = function () {
  const data = this.toJSON(); //json.stringfy와 같다.

  delete data.hashedPassword;
  return data;
};

const User = mongoose.model('User', UserSchema);

export default User;
