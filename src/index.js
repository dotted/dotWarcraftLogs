var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var URI = require('urijs');
/**
 * WarcraftLogsClient
 */
var WarcraftLogsClient = (function () {
    function WarcraftLogsClient(apiKey, apiUrl) {
        if (apiUrl === void 0) { apiUrl = 'https://www.warcraftlogs.com:443/v1'; }
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    WarcraftLogsClient.prototype.getZones = function () {
        try {
            var response = yield fetch(this.generateUrl('/zones'));
            var json = yield response.json();
            return json;
        }
        catch (error) {
        }
    };
    WarcraftLogsClient.prototype.getClasses = function () {
        try {
            var response = yield fetch(this.generateUrl('/classes'));
            var json = yield response.json();
            return json;
        }
        catch (error) {
            console.error(error);
        }
    };
    WarcraftLogsClient.prototype.getEncounterRankings = function (encounterId, metric, size, difficulty, region, playerClass, specialization, bracket, limit, page, filter) {
        try {
            var response = yield fetch(this.generateUrl("/rankings/encounter/" + encounterId));
            var json = yield response.json();
            return json;
        }
        catch (error) {
            console.error(error);
        }
    };
    WarcraftLogsClient.prototype.getCharacterRankings = function (characterName, serverName, serverRegion) {
        try {
            var response = yield fetch(this.generateUrl("/rankings/character/" + characterName + "/" + serverName + "/" + serverRegion));
            var json = yield response.json();
            return json;
        }
        catch (error) {
            console.error(error);
        }
    };
    WarcraftLogsClient.prototype.generateUrl = function (path) {
        return URI("" + this.apiUrl + path + "?api_key=" + this.apiKey)
            .normalize()
            .valueOf();
    };
    return WarcraftLogsClient;
})();
//# sourceMappingURL=index.js.map