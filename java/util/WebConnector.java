package util;


import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;



public class WebConnector
	{	
		Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
		Properties OR = null;
		Properties CONFIG=null;
		WebDriver driver =null;
		WebDriver mozilla=null;
		WebDriver chrome=null;
		WebDriver IE =null;
		static WebConnector w;
		
		public WebConnector(){
				if(OR==null){
					try{
						// initialize OR
						OR = new Properties();
						FileInputStream fs = new FileInputStream("/Users/abhi/Documents/java_class/Dice.search/java/com/qtpselenium/app/salesforce/config/OR.properties");
						OR.load(fs);
						//initialize CONFIg TO CORRESPONDING ENV
						CONFIG = new Properties();
						//fs = new FileInputStream("/Users/abhi/Documents/java_class/Selenium_Practise/src/test/java/com/qtpselenium/app/salesforce"+OR.getProperty("testEnv")+"_config.properties");
						
						fs = new FileInputStream("/Users/abhi/Documents/java_class/Dice.search/java/com/qtpselenium/app/salesforce/config/prod_config.properties");
						
						
						CONFIG.load(fs);
						
					}
					catch(Exception e){
						System.out.println("error in initialization property file");
						
						String curDir = System.getProperty("user.dir");
						System.out.println(curDir);
					}
				}
		}
		public void openBrowser(String browserType){
				log(" ");
				log("Opening browser "+browserType);
				if(browserType.equals("Mozilla")&&mozilla==null){
					

					  //  driver.get("https://www.google.de/");
					System.setProperty("webdriver.gecko.driver","/Users/abhi/Documents/java_class/Dice.search/gekhoDriver/geckodriver");
				//	FirefoxProfile prof = new FirefoxProfile();
				//	prof.setPreference("browser.startup.homepage_override.mstone", "ignore");
				//	prof.setPreference("startup.homepage_welcome_url.additional",  "about:blank");
				//	driver = new FirefoxDriver(prof);
					driver = new FirefoxDriver();
					mozilla = driver;
					// driver.get("http://www.facebook.com");
				}else if(browserType.equals("Chrome")){
					//driver = new ChromeDriver();
					System.setProperty("webdriver.chrome.driver","/Users/abhi/Documents/java_class/Dice.search/chrome/chromedriver");
				//	WebDriver driver = new RemoteWebDriver("http://127.0.0.1:9515", DesiredCapabilities.chrome());
					driver = new ChromeDriver();

					driver.get("http://www.google.com");
					DesiredCapabilities capabilities = DesiredCapabilities.chrome();
					ChromeOptions options = new ChromeOptions();
					options.addArguments("test-type");
				capabilities.setCapability("chrome.binary","/Applications/Chrome");
					capabilities.setCapability(ChromeOptions.CAPABILITY, options);
					
				}else if(browserType.equals("IE")){
					//Ie initialization
				}
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
				
		}
			public void navigate(String URL){
		
						log("Naviating to "+CONFIG.getProperty(URL));
						driver.get(CONFIG.getProperty(URL));
						//driver.get("http://www.google.com");
						//driver.get(URL);
						// takeScreenShot();
		}
			public void renavigate(String RURL){
					
					log("Naviating to "+CONFIG.getProperty(RURL));
					driver.get(CONFIG.getProperty(RURL));
					//driver.get("http://www.google.com");
					//driver.get(URL);
			}
			public void clearField(String ID){
					
					
			}



			// clicking on any object
			public void click(String objectName){
				log("Clicking on " + objectName);
				driver.findElement(By.xpath(OR.getProperty(objectName))).click();
				
			}
			
			public void type(String text, String objectName){
				log("Typing in " + objectName);
				driver.findElement(By.xpath(OR.getProperty(objectName))).clear();
				driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
			}
			
			public void select(String text, String objectName){
				log("Selecting from "+ objectName);
				driver.findElement(By.xpath(OR.getProperty(objectName))).clear();
				driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
			}
			
			public boolean isElementPresent(String objectName){
				log("Checking object presence "+ objectName);
				int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
				if(count==0)
					return false;
				else
					return true;
			}

			
			
			
			/// ****************Application dependent functions************************ ///
			
			public boolean isLoggedIn(){
				
				if(isElementPresent("searchText"))
					return true;
				else
					return false;
			}
			
			public void doDefaultLogin(){
				navigate("loginURL");
				type(CONFIG.getProperty("defaultUsername"), "loginusername");
				type(CONFIG.getProperty("defaultPassword"), "loginpassword");
				click("loginButton");
			}
			
			
			/********Singleton**********/
			public static WebConnector getInstance(){
				if(w==null)
					w= new WebConnector();
				
				return w;
			}
			
			/**************Logging***************/
			public void log(String msg){
				APPLICATION_LOGS.debug(msg);
			}
			public void quit() throws InterruptedException
				{	
				Thread.sleep(3000);
					driver.quit();
					System.out.println("Success fully application quit");
				}
			public void links_on_page(String objectName){
					log("Clicking on " + objectName);
					
					driver.findElement(By.xpath(OR.getProperty(objectName))).click();
					//System.out.println(driver.getCurrentUrl());
			}
			public void takeScreenShot() throws IOException {
					
					File screen = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
			      //  Point p = element.getLocation();
			       // Rectangle rect = new Rectangle(element.getSize().getWidth(), element.getSize().getHeight());
			        BufferedImage img = ImageIO.read(screen);
			       // BufferedImage dest = img.getSubimage(p.getX(), p.getY(), rect.width, rect.height);
			       // ImageIO.write(dest, "png", screen);
			        ImageIO.write(img, "png", screen);
			        File dest= new File("/Users/abhi/Documents/java_class/Dice.search/screenShots/"+System.nanoTime()+".png");
			        FileUtils.copyFile(screen,dest);
			}
			
			public void pageLinks(String objectName) throws InterruptedException{
					
				
					//List<WebElement> linksize = driver.findElements(By.tagName("a")); 
					//String xpathExpression="//*[@id="resultSec"]/div[1]/div[1]/div[2]/a";
					driver.findElement(By.xpath(OR.getProperty(objectName))).click();
					//List<WebElement> linksize = (List<WebElement>) driver.findElement(By.xpath(OR.getProperty(objectName)));
					List<WebElement> linksize = driver.findElements(By.tagName("a")); 
					int linksCount = linksize.size();
					//System.out.println("Total no of links Available: "+linksCount);
					String[] links = new String[linksCount];
					//System.out.println("List of links Available: ");  
					// print all the links from webpage 
					for(int i=0;i<linksCount;i++)
					{
					links[i] = linksize.get(i).getAttribute("href");
					//System.out.println(linksize.get(i).getAttribute("href"));
					} 
					// navigate to each Link on the webpage
					for(int i=0;i<linksCount;i++)
					{
					driver.navigate().to(links[i]);
					Thread.sleep(3000);
					}
					
					
					//driver.get(baseUrl + "https://www.google.co.in");
					/*List<WebElement> all_links_webpage = driver.findElements(By.tagName("a")); 
					System.out.println("Total no of links Available: " + all_links_webpage.size());
					int k = all_links_webpage.size();
					System.out.println("List of links Available: ");
					for(int i=0;i<k;i++)
					{
					if(all_links_webpage.get(i).getAttribute("href").contains("google"))
					{
					String link = all_links_webpage.get(i).getAttribute("href");
					System.out.println(link);
					}   
					}
					*/
			}
			
			public void string_find(String text) throws IOException, InterruptedException{
					
				
					//driver.find_elements_by_xpath("//*span[contains(text(), "button")]");
					List<WebElement> list = driver.findElements(By.xpath("//*[@id=bd]/div/div[1]/div[3]/div/div[2]/span[contains(text(),'"+text+"')]"));
					
				//	Assert.assertTrue("Text not found!", list.size()<0);
				//	Assert.assertTrue("text Found", list.size()>0);
	
				//	boolean condition = assertTrue(list.size()>0);
					
					if(list.size()>0){
						System.out.println("match foud size is"+list.size());
						for(int i=0;i<list.size();i++){
						    System.out.println(list.get(i));
						}
						Thread.sleep(5000);
					String CurrentURL= driver.getCurrentUrl();
					System.out.println(CurrentURL);
					log(CurrentURL);
					//System.out.println("taking current url screenshot");
					//System.out.println(CurrentURL);
				//	w.takeScreenShot();
					System.out.println("taking current url screenshot");
					list.clear();
					}
					
					log("Checking object presence "+ text);
					int count = driver.findElements(By.xpath("//*[@id=bd]/div/div[1]/div[3]/div/div[2]/span[contains(text(),'"+text+"')]")).size();
					String CurrentURL;
					if(count==0)
					{
						return;
					}
					else{
					CurrentURL= driver.getCurrentUrl();
					System.out.println(CurrentURL);
						return;
					}
			}
			public void PopUpClose(){
/*					driver.alertIsPresent();
					driver.switchTo.frame(driver.findElement(By.id(locatorToIdentifyFrame)));       
					driver.findElement(By.id(locatorToCloseAd)).click();*/ //Close Ad
					driver.switchTo().defaultContent();
					driver.switchTo().alert().dismiss();
			}
			public void OpenWithNewTab(){
					ArrayList<String> tabs = new ArrayList<String> (driver.getWindowHandles());
					driver.switchTo().window(tabs.get(1));
					driver.switchTo().window(tabs.get(0)); // switch back to main screen        
				    
			}
			public void clickWithWait(String objectName){
					log("Clicking on " + objectName);
					try {
						driver.wait(600);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					driver.findElement(By.xpath(OR.getProperty(objectName))).click();
					
					
				}
			
			
		
	}
