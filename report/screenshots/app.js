var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "should display form for Adding Customer|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00630078-009a-00e4-00ce-003b00a10027.png",
        "timestamp": 1546559966517,
        "duration": 4706
    },
    {
        "description": "should list all the labels|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00d9000b-004e-004f-0044-008200e70013.png",
        "timestamp": 1546559971281,
        "duration": 73
    },
    {
        "description": "should require firstname|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/001c0027-0012-0057-00b9-00ed00060098.png",
        "timestamp": 1546559971398,
        "duration": 23
    },
    {
        "description": "should require lastname|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/003400a8-005f-0052-003a-006500fa00ec.png",
        "timestamp": 1546559971468,
        "duration": 24
    },
    {
        "description": "should require postcode|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/0079004b-0040-0052-0027-007700810052.png",
        "timestamp": 1546559971535,
        "duration": 21
    },
    {
        "description": "should add a new customer from Excel|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/001c00b5-00a2-0026-0032-00cc003e000f.png",
        "timestamp": 1546559971604,
        "duration": 518
    },
    {
        "description": "should display newly created account|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00fb0018-0003-0066-002b-00c700720008.png",
        "timestamp": 1546559972171,
        "duration": 1237
    },
    {
        "description": "should open Account for the new customer|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/0078009e-00f6-0018-00bb-00fb00030081.png",
        "timestamp": 1546559973450,
        "duration": 4673
    },
    {
        "description": "should write Account number to Excel|Adding a Customer|Add Customer",
        "passed": true,
        "pending": false,
        "instanceId": 7418,
        "browser": {
            "name": "firefox"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/009c000d-0078-005d-00cc-0083006a0099.png",
        "timestamp": 1546559978175,
        "duration": 36
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
