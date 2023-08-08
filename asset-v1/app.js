/*the creator of the make it a real mod not chinese or malaysia*/
var app = new function() {
    this.name = "Set Fire", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 6600, this.bpm = 80, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 100, this.recminloop = 10, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#273C7F", this.col0 = "#273C7F", this.col1 = "#273C7F", this.col2 = "#273C7F", this.col3 = "#273C7F", this.col4 = "#273C7F", this.animearray = [{
        name: "1_lead",
        color: "EDCFAD",
        uniqsnd: !1
    }, {
        name: "2_deux",
        color: "FEDF25",
        uniqsnd: !1
    }, {
        name: "3_kosh",
        color: "CD0C2F",
        uniqsnd: !0
    }, {
        name: "4_shpok",
        color: "37046C",
        uniqsnd: !1
    }, {
        name: "5_tom",
        color: "23562B",
        uniqsnd: !0
    }, {
        name: "6_nouana",
        color: "FF0810",
        uniqsnd: !1
    }, {
        name: "7_scratch",
        color: "E4B5BB",
        uniqsnd: !1
    }, {
        name: "8_trill",
        color: "DA8BB3",
        uniqsnd: !1
    }, {
        name: "9_bass",
        color: "6ABE28",
        uniqsnd: !1
    }, {
        name: "10_uh",
        color: "676F96",
        uniqsnd: !1
    }, {
        name: "11_nugu",
        color: "786530",
        uniqsnd: !1
    }, {
        name: "12_guit",
        color: "FBF42B",
        uniqsnd: !1
    }, {
        name: "13_tromp",
        color: "FB060D",
        uniqsnd: !0
    }, {
        name: "14_pouin",
        color: "137232",
        uniqsnd: !1
    }, {
        name: "15_tung",
        color: "F73C05",
        uniqsnd: !0
    }, {
        name: "16_aoun",
        color: "E9F6FC",
        uniqsnd: !1
    }, {
        name: "17_hum",
        color: "0A82C0",
        uniqsnd: !1
    }, {
        name: "18_get",
        color: "21597E",
        uniqsnd: !1
    }, {
        name: "19_tellme",
        color: "4255A2",
        uniqsnd: !1
    }, {
        name: "20_make",
        color: "404C98",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Mad",
        src: "v1-b1-mad-hb.mp4",
        code: "1,2,11,14,16",
        sound: "bonus-mad",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json";
    }
};
