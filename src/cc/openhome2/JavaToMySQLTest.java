package cc.openhome2;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
public class JavaToMySQLTest 
{
	private Connection conn;
	private Statement stmt;

	public JavaToMySQLTest() throws Exception{  
            //連接MySQL
            Class.forName("com.mysql.jdbc.Driver");
//            System.out.println("連接成功MySQLToJava");
            //建立讀取資料庫 (test 為資料庫名稱; user 為MySQL使用者名稱; passwrod 為MySQL使用者密碼)
            String datasource = "jdbc:mysql://127.0.0.1:3306/attractions?user=root&password=root";
            //以下的資料庫操作請參考本blog中: "使用 Java 連結與存取 access 資料庫 (JDBC)"
            conn = DriverManager.getConnection(datasource);
//            System.out.println("連接成功MySQL");
        	 stmt = conn.createStatement();
            //撈出剛剛新增的資料
		}
         public List<dataland> chick(String city) {
            String sql= "SELECT * FROM prop WHERE CITY LIKE '%"+city+"%'";
            ResultSet rs = null;	
            List<dataland> list = new ArrayList<>();
            try
            {
            
            rs = stmt.executeQuery(sql);
            
          
            	while(rs.next()) {
    				
            		dataland data32 = new dataland();
    				data32.setId(rs.getString(1));
    				data32.setgID(rs.getString(2));
    				data32.setName(rs.getString(3));
    				data32.setTel(rs.getString(4));
    				data32.setIntroduction(rs.getString(5));
    				data32.setTrafficGuidelines(rs.getString(6));
    				data32.setAddress(rs.getString(7));
    				data32.setOpenHours(rs.getString(8));
    				data32.setCity(rs.getString(9));
    				data32.setTown(rs.getString(10));
    				data32.setCoordinate(rs.getString(11));
    				data32.setPhoto(rs.getString(12));
    				list.add(data32);
    				
    								
            	}
            	 
            }
    		 catch (Exception e) {
    			System.out.println(e);
    		}
    		return list;
       }
         
         
         
            
         public List<dataland> detailsareceive(String dataid) {
             String sql= "SELECT * FROM prop WHERE ID ="+dataid+"";
             ResultSet rs = null;	
             List<dataland> list = new ArrayList<>();
             try
             {
                 
             rs = stmt.executeQuery(sql);
            if(rs.next()){
             		dataland data32 = new dataland();
     				data32.setId(rs.getString(1));
     				data32.setgID(rs.getString(2));
     				data32.setName(rs.getString(3));
     				data32.setTel(rs.getString(4));
     				data32.setIntroduction(rs.getString(5));
     				data32.setTrafficGuidelines(rs.getString(6));
     				data32.setAddress(rs.getString(7));
     				data32.setOpenHours(rs.getString(8));
     				data32.setCity(rs.getString(9));
     				data32.setTown(rs.getString(10));
     				data32.setCoordinate(rs.getString(11));
     				data32.setPhoto(rs.getString(12));
     				list.add(data32);
            }
    				
             	System.out.println(rs.getString(3));
             }
            
     		 catch (Exception e) {
     			
     			System.out.println(e);
     		}
     		return list;
        } 
}
    	
            