const jwt = require("jsonwebtoken");
const TokenModel = require("../model/token-model");

class TokenService {
  generateTokens(payload) {
    return {
      accessToken: jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {
        expiresIn: "15s",
      }),
      refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET, {
        expiresIn: "30d",
      }),
    };
  }

  validateAccessToken(token) {
    try{
        const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        return userData;
    }catch(e){
        return null;
    }
  }

  validateRefreshToken(token) {
    try{
        const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
        return userData;
    }catch(e){
        return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      await tokenData.save();
    }
    const token = await TokenModel.create({ user: userId, refreshToken }); 
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await TokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
