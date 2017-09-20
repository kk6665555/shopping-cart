package cc.openhome2;

import java.io.BufferedReader;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Properties;

import org.json.JSONArray;
import org.json.JSONObject;

public class GiftExample {

	public static void main(String[] args) {
		String strUrl = "http://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx";
		String json = getJSONString(strUrl);
		
		long start = System.currentTimeMillis();
		// -------------------
		Properties prop = new Properties();
		prop.setProperty("user", "root");
		prop.setProperty("password", "root");
		
		try(Connection conn = 
			DriverManager.getConnection(
					"jdbc:mysql://127.0.0.1:3306/attractions",prop)){
			// 3. SQL statement
			String sql = "INSERT INTO prop (gID,Name,Tel,Introduction,TrafficGuidelines,Address,OpenHours,City,Town,Coordinate,Photo)" +"VALUES (?,?,?,?,?,?,?,?,?,?,?)";
			java.sql.PreparedStatement pstmt = conn.prepareStatement(sql);
			
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
		//	System.out.println(System.currentTimeMillis()- start);
		}catch(Exception e){
			System.out.println(e);
		}
		
	}
	
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