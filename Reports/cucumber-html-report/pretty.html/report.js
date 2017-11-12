$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Dice.feature");
formatter.feature({
  "line": 1,
  "name": "Logging Dice",
  "description": "\nLogin into Dice and search for jobs",
  "id": "logging-dice",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Logging in Dice",
  "description": "",
  "id": "logging-dice;logging-in-dice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"search-field-keyword\" as \"\u003cJobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"search-field-location\" as \"\u003cSearchLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on FindJobs  \"FindJob\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on JobsPage \"JobsPage2\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on contract checkbox \"contract_checkbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on contractw checkbox \"contractWCheckbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on links_on_page \"links_on_page4\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "logging-dice;logging-in-dice;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "Browser",
        "JobTitle",
        "SearchLocation",
        "Expected_Result"
      ],
      "line": 20,
      "id": "logging-dice;logging-in-dice;;1"
    },
    {
      "cells": [
        "Y",
        "Mozilla",
        "Selenium Automation",
        "Dallas,TX",
        "success"
      ],
      "line": 21,
      "id": "logging-dice;logging-in-dice;;2"
    },
    {
      "cells": [
        "Y",
        "Mozilla",
        "Selenium Automation",
        "naperville,IL",
        "success"
      ],
      "line": 22,
      "id": "logging-dice;logging-in-dice;;3"
    },
    {
      "cells": [
        "Y",
        "Mozilla",
        "Selenium Automation",
        "Austin, TX",
        "success"
      ],
      "line": 23,
      "id": "logging-dice;logging-in-dice;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Logging in Dice",
  "description": "",
  "id": "logging-dice;logging-in-dice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I go to \"loginURL\" on \"Mozilla\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"search-field-keyword\" as \"Selenium Automation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"search-field-location\" as \"Dallas,TX\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on FindJobs  \"FindJob\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on JobsPage \"JobsPage2\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on contract checkbox \"contract_checkbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on contractw checkbox \"contractWCheckbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on links_on_page \"links_on_page4\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "Dice.runmode_is(String)"
});
formatter.result({
  "duration": 92358706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 23
    }
  ],
  "location": "Dice.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 9480791058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search-field-keyword",
      "offset": 9
    },
    {
      "val": "Selenium Automation",
      "offset": 35
    }
  ],
  "location": "Dice.i_enter_as(String,String)"
});
formatter.result({
  "duration": 626885575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search-field-location",
      "offset": 9
    },
    {
      "val": "Dallas,TX",
      "offset": 36
    }
  ],
  "location": "Dice.i_enter_as(String,String)"
});
formatter.result({
  "duration": 732032470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FindJob",
      "offset": 22
    }
  ],
  "location": "Dice.i_click_on_FindJobs(String)"
});
formatter.result({
  "duration": 4068818680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JobsPage2",
      "offset": 21
    }
  ],
  "location": "Dice.i_click_on1(String)"
});
formatter.result({
  "duration": 399777020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contract_checkbox",
      "offset": 30
    }
  ],
  "location": "Dice.i_click_on_contract_checkbox(String)"
});
formatter.result({
  "duration": 3790145137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contractWCheckbox",
      "offset": 31
    }
  ],
  "location": "Dice.i_click_on_contractw_checkbox(String)"
});
formatter.result({
  "duration": 4000260917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "links_on_page4",
      "offset": 26
    }
  ],
  "location": "Dice.i_click_on_links_on_page(String)"
});
