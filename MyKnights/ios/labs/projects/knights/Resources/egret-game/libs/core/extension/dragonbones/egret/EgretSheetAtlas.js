//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var dragonBones;
(function (dragonBones) {
    /**
     * @class dragonBones.EgretSheetAtlas
     * @implements dragonBones.ITextureAtlas
     * @classdesc
     * Egret 引擎使用的sheet纹理集
     */
    var EgretSheetAtlas = (function () {
        /**
         * 创建一个新的EgretSheetAltas 实例
         * @param texture 纹理
         * @param textureData 纹理数据
         * @param scale 缩放
         */
        function EgretSheetAtlas(texture, textureData, scale) {
            if (scale === void 0) { scale = 1; }
            this.texture = texture;
            this.textureData = textureData;
            this._textureDatas = {};
            this.scale = scale;
            this.name = textureData[dragonBones.ConstValues.A_NAME];
            this.spriteSheet = new egret.SpriteSheet(texture);
            this._textureDatas = textureData["frames"];
        }
        var __egretProto__ = EgretSheetAtlas.prototype;
        /**
         *通过纹理的名字来获取纹理
         * @param fullName 纹理的名字
         * @returns {egret.Texture} 获取到的纹理
         */
        __egretProto__.getTexture = function (fullName) {
            var result = this.spriteSheet.getTexture(fullName);
            if (!result) {
                var config = this._textureDatas[fullName];
                result = this.spriteSheet.createTexture(fullName, config.x, config.y, config.w, config.h, config.offX, config.offY, config.sourceW, config.sourceH);
            }
            return result;
        };
        /**
         *释放资源
         */
        __egretProto__.dispose = function () {
            this.texture = null;
        };
        /**
         * 根据子纹理的名字获取子纹理的矩形区域
         * @param subTextureName 子纹理的名字
         * @returns {*} 获取到的矩形区域
         */
        __egretProto__.getRegion = function (subTextureName) {
            var textureData = this._textureDatas[subTextureName];
            if (textureData) {
                return EgretSheetAtlas.Region;
            }
            return null;
        };
        EgretSheetAtlas.Region = new egret.Rectangle();
        return EgretSheetAtlas;
    })();
    dragonBones.EgretSheetAtlas = EgretSheetAtlas;
    EgretSheetAtlas.prototype.__class__ = "dragonBones.EgretSheetAtlas";
})(dragonBones || (dragonBones = {}));
