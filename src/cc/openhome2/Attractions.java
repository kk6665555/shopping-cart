package cc.openhome2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.mysql.jdbc.PreparedStatement;

/**
 * Servlet implementation class Attractions
 */
@WebServlet("/Attractions")
public class Attractions extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	String strURL="http://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx";
	String json = getJSONString(strURL);
	

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		request.setCharacterEncoding("UTF-8");
		
	
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn =
				DriverManager.getConnection(
					"jdbc:mysql://127.0.0.1:3306/attractions?user=root&password=root");
			System.out.println("OK");
			
			String sql = "INSERT INTO prop (gID,Name,Tel,Introduction,TrafficGuidelines,Address,OpenHours,City,Town,Coordinate,Photo)" +"VALUES (?,?,?,?,?,?,?,?,?,?,?)";
			java.sql.PreparedStatement pstmt = conn.prepareStatement(sql);
					System.out.println("ok");
			
			
			JSONArray root = new JSONArray(json);
			for(int i = 0; i < root.length();i++) {
				JSONObject row = root.getJSONObject(i);
				
				String gID = row.getString("ID");
				String Name = row.getString("Name");
				String Tel = row.getString("Tel");
				String Introduction = row.getString("Introduction");
				String TrafficGuidelines = row.getString("TrafficGuidelines");
				String Address = row.getString("Address");
				String OpenHours = row.getString("OpenHours");
				String City = row.getString("City");
				String Town = row.getString("Town");
				String Coordinate = row.getString("Coordinate");
				String Photo = row.getString("Photo");
				
				
				pstmt.setString(1, gID);
				pstmt.setString(2, Name);
				pstmt.setString(3, Tel);
				pstmt.setString(4, Introduction);
				pstmt.setString(5, TrafficGuidelines);
				pstmt.setString(6, Address);
				pstmt.setString(7, OpenHours);
				pstmt.setString(8, City);
				pstmt.setString(9, Town);
				pstmt.setString(10, Coordinate);
				pstmt.setString(11, Photo);
				
				pstmt.execute();
				
			}
			
			System.out.println("OK");
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		
	}
			
			/*Statement stmt = conn.createStatement();
			stmt.executeUpdate("INSERT INTO cust (Name,Tel,Introduction,TrafficGuidelines,Address,OpenHours,City,Town,Coordinate,Photo)" +"VALUES ('?','?','?','?','?','?','?','?','?','?')");
			stmt.close();
			System.out.println("ok");
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}*/
	
	private static String getJSONString(String strUrl){
		StringBuilder sb = new StringBuilder();
		try {
			URL url = new URL(strUrl);
			HttpURLConnection conn = (HttpURLConnection)url.openConnection();
			conn.connect();
			BufferedReader reader = 
				new BufferedReader(
					new InputStreamReader(conn.getInputStream(),"UTF-8")) ;
			String line = null;
			while ( (line = reader.readLine()) != null){
				sb.append(line.trim());
			}
			reader.close();
			System.out.println(sb);
		} catch (Exception e) {
			System.out.println(e);
		}
		return sb.toString();
	}
	}

