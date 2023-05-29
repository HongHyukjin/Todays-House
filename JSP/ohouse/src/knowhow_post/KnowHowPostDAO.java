package knowhow_post;
import java.sql.*;

public class KnowHowPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public KnowHowPostDAO(){  
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
        public int post(KnowHowPostDTO knowHowPostDTO){
            String SQL ="insert into house_post(file,knowhow_title,knowhow_content) values(?,?,?)";
            try{
                ps = conn.prepareStatement(SQL);
                ps.setString(1, knowHowPostDTO.getFile());
                ps.setString(2, knowHowPostDTO.getKnowhow_title());
                ps.setString(3, knowHowPostDTO.getKnowhow_content());
    
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
