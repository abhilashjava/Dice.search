Feature: Logging Dice

Login into Dice and search for jobs

@login
Scenario Outline: Logging in Dice
Given Runmode is "<Runmode>"
Given I go to "loginURL" on "<Browser>"
And I enter "search-field-keyword" as "<JobTitle>"
And I enter "search-field-location" as "<SearchLocation>"
And I click on FindJobs  "FindJob"
When I click on JobsPage "JobsPage2"
Then I click on contract checkbox "contract_checkbox"
Then I click on contractw checkbox "contractWCheckbox"
Then I click on links_on_page "links_on_page4"



 Examples:
|Runmode  |Browser     | JobTitle            	| SearchLocation   | Expected_Result | 
|  Y      | Mozilla    | Selenium Automation    |  Dallas,TX 	   | success         | 
|  Y      | Mozilla    | Selenium Automation    |  naperville,IL   | success         | 
|  N      | Mozilla    | Selenium Automation    |  Austin, TX 	   | success         | 
