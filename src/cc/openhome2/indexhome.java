package cc.openhome2;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class indexhome
 */
@WebServlet("/indexhome")
public class indexhome extends HttpServlet {
	
      
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String gidchick = request.getParameter("myField");
		System.out.println(gidchick);
	}
}
