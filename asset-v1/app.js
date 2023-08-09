/*the creator of the make it a real mod not chinese or malaysia*/
var app = new function() {
    this.name = "Set Fire", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 6600, this.bpm = 145, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 100, this.recminloop = 10, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#273C7F", this.col0 = "#273C7F", this.col1 = "#273C7F", this.col2 = "#273C7F", this.col3 = "#273C7F", this.col4 = "#273C7F", this.animearray = [{
        name: "1_kick",
        color: "EDCFAD",
        uniqsnd: !1
    }, {
        name: "2_hihat",
        color: "FEDF25",
        uniqsnd: !1
    }, {
        name: "3_chair",
        color: "CD0C2F",
        uniqsnd: !0
    }, {
        name: "4_toms",
        color: "37046C",
        uniqsnd: !1
    }, {
        name: "5_joker",
        color: "23562B",
        uniqsnd: !0
    }, {
        name: "6_reese",
        color: "FF0810",
        uniqsnd: !1
    }, {
        name: "7_ambience",
        color: "E4B5BB",
        uniqsnd: !1
    }, {
        name: "8_ay",
        color: "DA8BB3",
        uniqsnd: !1
    }, {
        name: "9_robot",
        color: "6ABE28",
        uniqsnd: !1
    }, {
        name: "10_jiahua",
        color: "676F96",
        uniqsnd: !1
    }, {
        name: "11_808",
        color: "786530",
        uniqsnd: !1
    }, {
        name: "12_lead",
        color: "FBF42B",
        uniqsnd: !1
    }, {
        name: "13_brass",
        color: "FB060D",
        uniqsnd: !0
    }, {
        name: "14_chorus",
        color: "137232",
        uniqsnd: !1
    }, {
        name: "15_fast",
        color: "F73C05",
        uniqsnd: !0
    }, {
        name: "16_zun",
        color: "E9F6FC",
        uniqsnd: !1
    }, {
        name: "17_qingqing",
        color: "0A82C0",
        uniqsnd: !1
    }, {
        name: "18_fuckass",
        color: "21597E",
        uniqsnd: !1
    }, {
        name: "19_greenhat",
        color: "4255A2",
        uniqsnd: !1
    }, {
        name: "20_iamgay",
        color: "404C98",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "MikuGang",
        src: "v1-b1-mikugang-hb.mp4",
        code: "1,2,11,14,16",
        sound: "bonus-mikugang",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json";
    }
};
