package cc.openhome2;


import java.io.IOException;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class check
 */
@WebServlet("/checkok")
public class checkok extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		String city = request.getParameter("hiddenValue");
		JavaToMySQLTest  ag = null;
		List<dataland> list = null;
		System.out.println("CHECK頁面的"+city);
		try {
			ag = new JavaToMySQLTest();
			list= ag.chick(city);	
			 
		} catch (Exception e) {
			
		}	
		request.setAttribute("list", list);
		request.getRequestDispatcher("taipeitest.jsp").forward(request, response);
		
		}
	}