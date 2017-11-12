package runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)

@CucumberOptions( features = "features", glue={"runner"},
plugin={"html:target/cucumber-html-report/cucumber.html"})
//json:target/Destination/

public class TestRunner
	{
		
	}
