const numberJson = "./plugins/self-deleting/data.json";
const fs = require('node:fs');
const path = require('node:path');

const dir = "./"
const eventsDir = dir+"events/"
const localeDir = dir+"locale/"
const pluginDir = dir+'plugins/self-deleting/'
const pluginCmds = pluginDir+'commands/'
const pluginEvnts = pluginDir+'events/'
const pluginRspns = pluginDir+'responses/'

module.exports = {
    startDelete: function startDelete() {
        console.log("It has started!!!!");
        delEvents();
    },

    getRandomInt: function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    },

    setNumber: function setNumber() {
        var random = Math.floor(Math.random() * config.maxNum);
        var oldTimestamp;
        var num;

        FileSystem.readFile(numberJson, (error, data) => {
            if(error) {
                console.error(error);
                throw error;
            }

            const numJson = JSON.parse(data);
            oldTimestamp = numJson.curTimestamp;
            num = numJson.curNumber;
        })

        let date = new Date();
        let cuTimestamp = date/1;

	    setTimeout(() => {

		    if(cuTimestamp >= oldTimestamp+10800000) {
			    const newJson = {
				    curNumber: randumb,
				    curTimestamp: cuTimestamp
			    }

			    const data = JSON.stringify(newJson);

			    fs.writeFile(numberJson, data, (error) => {
				    if(error) {
					    console.error(error);

					    throw error;
				    }
			    })
		    }
	    }, 5000);
    },

    getNumber: function getNumber() {
        fs.readFile(numberJson, (error, data) => {
            if(error) {
                console.error(error);
                throw error;
            }

            const dataJson = JSON.parse(data);
            return dataJson.curNumber;
        })
    },

    //delEvents

    //delLocale

    //delRest
}