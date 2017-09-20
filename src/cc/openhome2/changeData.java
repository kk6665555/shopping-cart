package cc.openhome2;

import java.io.IOException;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/changeData")
public class changeData extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		String user=(String)session.getAttribute("user");
		if(user==null){
			request.getRequestDispatcher("logIn.jsp").forward(request, response);
		}
		String tel = request.getParameter("tel");
		String email = request.getParameter("email");
		String sname = request.getParameter("sname");
		String address = request.getParameter("address");
		
		try {			
			Class.forName("com.mysql.jdbc.Driver");		
		} catch (Exception e) {
			System.out.println(e);
		}	
		Properties prop = new Properties();
		prop.setProperty("user", "root");
		prop.setProperty("password", "root");
		
		String sql = "UPDATE member SET sname=? ,tel=?,email=?,address=? WHERE user='"+user+"'";
		System.out.println(sql);
		try (
				Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/attractions",prop);
				PreparedStatement pstmt=conn.prepareStatement(sql);
				)
			{	
			pstmt.setString(1, sname);
			pstmt.setString(2, tel);
			pstmt.setString(3, email);
			pstmt.setString(4, address);
	
			pstmt.executeUpdate();
			request.getRequestDispatcher("black.jsp").forward(request, response);
			}catch (Exception e){
				System.out.println(e);
			}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
