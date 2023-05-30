package photo_post;
import java.sql.*;
import java.util.*;

public class PhotoPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;

    public PhotoPostDAO(){
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
    public int post(PhotoPostDTO photoPostDTO){
        String SQL ="insert into photo_post(pyeong,type,style,file,place,memo) values(?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, photoPostDTO.getPyeong());
            ps.setString(2, photoPostDTO.getType());
            ps.setString(3, photoPostDTO.getStyle());
            ps.setString(4, photoPostDTO.getFile());
            ps.setString(5, photoPostDTO.getPlace());
            ps.setString(6, photoPostDTO.getMemo());

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

    // member table과 photo table join 해서 member의 이메일이 현재 로그인된 이메일인 photo를 불러옴
    public List<PhotoPostDTO> select(String user_email){
        PhotoPostDTO photoPostDTO = null;
        List<PhotoPostDTO> list = new ArrayList<>();
        String SQL ="select * from ohouse_member m join photo_post p where m.user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            rs = ps.executeQuery(); 
            while(rs.next()){
                photoPostDTO = new PhotoPostDTO();
                photoPostDTO.setPyeong(rs.getString("pyeong"));
                photoPostDTO.setType(rs.getString("type"));
                photoPostDTO.setStyle(rs.getString("style"));
                photoPostDTO.setPlace(rs.getString("place"));
                photoPostDTO.setFile(rs.getString("file"));
                photoPostDTO.setMemo(rs.getString("memo"));
                list.add(photoPostDTO);
            }

           return list;
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
        return list;
    }



    
}
