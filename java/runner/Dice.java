package runner;
import java.io.IOException;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.WebConnector;

public class Dice
	{
		WebConnector selenium = new WebConnector();

		@Given("^Runmode is \"([^\"]*)\"$")
		public void runmode_is(String runmode) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
				if(runmode.equals("N"))
					throw new PendingException("Skipping the test as Runmode is No");
		    
		}
		
		@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
		public void i_go_to_on(String URL, String browser)  {
		    // Write code here that turns the phrase above into concrete actions
				  System.out.println("I am going to "+URL+ " on " +browser);
				   selenium.openBrowser(browser);
				   selenium.navigate(URL);
				   /*try {
					selenium.takeScreenShot();
					System.out.println("take screen shot");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}*/
		}
	

		@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
		public void i_enter_as(String object, String text)  {
		    // Write code here that turns the phrase above into concrete actions
				System.out.println("Entering in "+object+ "value"+text);
				
				selenium.type(text, object);
		}

//		@And("^I click on FindJobs \"([^\"]*)\"$")
//		public void i_click_on(String object) throws InterruptedException {
//		    // Write code here that turns the phrase above into concrete actions
//				System.out.println("Click on "+object);
//				selenium.click(object);
//				
//		}
		@Given("^I click on FindJobs  \"([^\"]*)\"$")
		public void i_click_on_FindJobs(String object) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
				System.out.println("Click on "+object);
				selenium.click(object);
		}
		@When("^I click on JobsPage \"([^\"]*)\"$")
		public void i_click_on1(String object){
				//selenium.PopUpClose();
				selenium.click(object);
			
		}
		
		@Then("^I click on contract checkbox \"([^\"]*)\"$")
		public void i_click_on_contract_checkbox(String objectName) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   selenium.click(objectName);
		    
		}
		
		
		@Then("^I click on contractw checkbox \"([^\"]*)\"$")
		public void i_click_on_contractw_checkbox(String objectName) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   selenium.click(objectName);
		  
		}
		
		@Then("^I click on links_on_page \"([^\"]*)\"$")
		public void i_click_on_links_on_page(String objectName) throws InterruptedException, IOException{
			
				selenium.links_on_page(objectName);
				selenium.string_find("C2H");
				
			//	selenium.takeScreenShot();
		      selenium.string_find("crop to crop");
			//	selenium.takeScreenShot();
				selenium.quit();
			//	selenium.takeScreenShot();
			//	selenium.string_find("W2");
		}
		
		
		
	}
