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
        "N",
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
  "duration": 269572142,
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
  "duration": 10447863543,
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
  "duration": 589256544,
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
  "duration": 877988392,
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
  "duration": 4187851950,
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
  "duration": 362532054,
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
  "duration": 3289926181,
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
  "duration": 4296050647,
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
formatter.result({
  "duration": 104281504427,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Logging in Dice",
  "description": "",
  "id": "logging-dice;logging-in-dice;;3",
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
  "name": "I enter \"search-field-location\" as \"naperville,IL\"",
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
  "duration": 1138915,
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
  "duration": 10839385673,
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
  "duration": 1332156878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search-field-location",
      "offset": 9
    },
    {
      "val": "naperville,IL",
      "offset": 36
    }
  ],
  "location": "Dice.i_enter_as(String,String)"
});
formatter.result({
  "duration": 1067453014,
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
  "duration": 4289892615,
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
  "duration": 359799643,
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
  "duration": 4187165830,
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
  "duration": 4027202175,
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
formatter.result({
  "duration": 104470802271,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Logging in Dice",
  "description": "",
  "id": "logging-dice;logging-in-dice;;4",
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
  "name": "Runmode is \"N\"",
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
  "name": "I enter \"search-field-location\" as \"Austin, TX\"",
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
      "val": "N",
      "offset": 12
    }
  ],
  "location": "Dice.runmode_is(String)"
});
formatter.result({
  "duration": 7801622,
  "error_message": "cucumber.api.PendingException: Skipping the test as Runmode is No\n\tat runner.Dice.runmode_is(Dice.java:19)\n\tat ✽.Given Runmode is \"N\"(Dice.feature:7)\n",
  "status": "pending"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "search-field-location",
      "offset": 9
    },
    {
      "val": "Austin, TX",
      "offset": 36
    }
  ],
  "location": "Dice.i_enter_as(String,String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
});