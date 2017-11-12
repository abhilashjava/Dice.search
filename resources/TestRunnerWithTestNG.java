package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)

/*@CucumberOptions( features = "features", glue={"runner"},
plugin={"html:Reports/cucumber-html-report"})*/
//json:target/Destination/

//@CucumberOptions(
//		strict = true,
//		monochrome = true, 
//		features = "src/test/resources/features",
//		glue = "stepdefinition",
//		plugin = {"pretty", "html:target/cucumber-html-report" },
//		tags={"@Regression,@JunitScenario,@TestngScenario"})

//@RunWith(Cucumber.class)
@CucumberOptions( strict = true
				 ,features = "features", glue={"runner"}
				 ,plugin = {"pretty:STDOUT","html:Reports/cucumber-html-report/pretty.html",
						    "json:Reports/cucumber-json-report/report.json",
						    "com.cucumber.listener.ExtentCucumberFormatter:Reports/cucumber-extents-report/report.html"
						   }
				
				 ,monochrome = true
			     
				 ,dryRun = false
				)

public class TestRunnerWithTestNG extends AbstractTestNGCucumberTests
	{
		
		
	}
