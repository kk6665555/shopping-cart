package cc.openhome2;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class detailsareceive
 */
@WebServlet("/detailsareceive")
public class detailsareceive extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String dataid = request.getParameter("id");
		
		//拿到ID之後開始判斷 
		JavaToMySQLTest sq = null;
		List<dataland> list = null;
		
		
		try {
			sq = new JavaToMySQLTest();
			
			list= sq.detailsareceive(dataid);	
			 
		} catch (Exception e) {
			System.out.println(e);
		}	
		request.setAttribute("list", list);
		request.getRequestDispatcher("detailsattractions.jsp").forward(request, response);
		
		}

	}

