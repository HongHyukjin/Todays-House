package house_post;
import java.sql.*;

public class HousePostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public HousePostDAO(){  
        try{
            String DBURL="jdbc:mysql://localhost:3306/Todays_House";
            String DBID="root";
            String DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

        // 1. post
        public int post(HousePostDTO housePostDTO){
            String SQL ="insert into house_post(file,house_title,house_content) values(?,?,?)";
            try{
                ps = conn.prepareStatement(SQL);
                ps.setString(1, housePostDTO.getFile());
                ps.setString(2, housePostDTO.getHouse_title());
                ps.setString(3, housePostDTO.getHouse_content());
    
                return ps.executeUpdate();
            }
            catch(Exception e){
                e.printStackTrace();
            }
            finally{
                try{
                    if(rs!=null){rs.close();}
                    if(ps!=null){ps.close();}
                    if(conn!=null){conn.close();}
                }
                catch(Exception e){ }
              
            }
            return -1;
        }
}
