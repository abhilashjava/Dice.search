import org.apache.log4j.Logger;

public class Log4j
	{
		
		public static void main(String[] args)
			{
				// TODO Auto-generated method stub
				
				Logger APPLICATION_LOG = Logger.getLogger("devpinoyLogger");
				APPLICATION_LOG.debug("STARTING");
				APPLICATION_LOG.debug("EXECUTING");
				APPLICATION_LOG.debug("ENDING");
				
				
			}
			
	}
