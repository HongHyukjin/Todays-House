package house_post;
import java.util.*;
import java.sql.*;

public class HousePostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public HousePostDAO() {
        try {
            String DBURL = "jdbc:mysql://localhost:3306/Todays_House";
            String DBID = "root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 1. post
    public int post(HousePostDTO housePostDTO) {
        String SQL = "insert into house_post(user_email,file,house_title,house_content,place,pyeong,category,worker,family,area,area2,style) values(?,?,?,?,?,?,?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, housePostDTO.getUser_email());
            ps.setString(2, housePostDTO.getFile());
            ps.setString(3, housePostDTO.getHouse_title());
            ps.setString(4, housePostDTO.getHouse_content());
            ps.setString(5, housePostDTO.getPlace());
            ps.setString(6, housePostDTO.getPyeong());
            ps.setString(7, housePostDTO.getCategory());
            ps.setString(8, housePostDTO.getWorker());
            ps.setString(9, housePostDTO.getFamily());
            ps.setString(10, housePostDTO.getArea());
            ps.setString(11, housePostDTO.getArea2());
            ps.setString(12, housePostDTO.getStyle());

            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (conn != null) {
                    conn.close();
                }
            } catch (Exception e) {
            } 

        }
        return -1;
    }

    public List<HousePostDTO> select(String user_email){
        HousePostDTO housePostDTO = null;
        List<HousePostDTO> list = new ArrayList<>();
        String SQL ="select * from ohouse_member m join house_post h where m.user_email=? && h.user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            ps.setString(2, user_email);
            rs = ps.executeQuery(); 
            while(rs.next()){
                housePostDTO = new HousePostDTO();
                housePostDTO.setIdx(rs.getInt("h.idx"));
                housePostDTO.setFile(rs.getString("file"));
                housePostDTO.setHouse_title(rs.getString("house_title"));
                housePostDTO.setHouse_content(rs.getString("house_content"));
                housePostDTO.setPlace(rs.getString("place"));
                housePostDTO.setPyeong(rs.getString("pyeong"));
                housePostDTO.setCategory(rs.getString("category"));
                housePostDTO.setWorker(rs.getString("worker"));
                housePostDTO.setFamily(rs.getString("family"));
                housePostDTO.setArea(rs.getString("area"));
                housePostDTO.setArea2(rs.getString("area2"));
                housePostDTO.setStyle(rs.getString("style"));

                list.add(housePostDTO);
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

    public int delete(HousePostDTO housePostDTO){
        String SQL = "delete from house_post where idx=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setInt(1, housePostDTO.getIdx());
    
            return ps.executeUpdate();
        }
        catch(Exception e){}
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
