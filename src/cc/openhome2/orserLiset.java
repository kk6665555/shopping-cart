package cc.openhome2;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cc.openhome2.Agriculturalarea;
import cc.openhome2.data1;
import cc.openhome2.gift;

/**
 * Servlet implementation class orserLiset
 */
@WebServlet("/orserLiset")
public class orserLiset extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		HttpSession session = request.getSession();
//		String id = (String)session.getAttribute("id");
		String id = request.getParameter("id");
		String delete=request.getParameter("delete");
		System.out.println(delete);
//		System.out.println(id);
		
		List<gift> list1 = null;
		List<data1> list = null;
		List<data1> data = null;
		String number=null;
		Map<List<gift>, String> listproduct= null;
		Map<List<data1>,Map<List<gift>, String>> listproduct1=new HashMap<List<data1>,Map<List<gift>, String>>();

		try {
			Agriculturalarea ag = new Agriculturalarea();
			list=ag.check5(id);
//			System.out.println(list.size());
			for(int i = 0 ;i<list.size();i++) {
				listproduct=new HashMap<List<gift>,String>();
				data=ag.check6(id,i+1);
				
//				System.out.println(list.size());
			String ProductID =  list.get(i).getProductID();
//			System.out.println(ProductID);
			String[] strspli = ProductID.split(",");
				for(int i1 = 0 ; i1<strspli.length;i1=i1+2) {
//					System.out.println(strspli[i1+1]);
					list1=ag.check3(strspli[i1]);
					number=strspli[i1+1];
					listproduct.put(list1,number);	
				
				}
				listproduct1.put(data,listproduct);
			}
				
		
		} catch (Exception e) {
			System.out.println(e);
		}
		request.setAttribute("list1", listproduct1);
		request.getRequestDispatcher("user_OrdersList.jsp").forward(request, response);
		
	}
}
