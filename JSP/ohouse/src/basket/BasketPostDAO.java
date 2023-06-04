package basket;
import java.sql.*;
import java.util.*;

public class BasketPostDAO {
    private Connection conn;  
    private PreparedStatement ps;  
    private Statement stmt;
    private ResultSet rs;

    public BasketPostDAO(){
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
    public int post(BasketPostDTO basketPostDTO){
        String SQL ="insert into basket(user_email,id,num,price,sale,totalprice,memo) values(?,?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);

            ps.setString(1, basketPostDTO.getUser_email());
            ps.setString(2, basketPostDTO.getId());
            ps.setString(3, basketPostDTO.getNum());
            ps.setString(4, basketPostDTO.getPrice());
            ps.setString(5, basketPostDTO.getSale());
            ps.setString(6, basketPostDTO.getTotalprice());
            ps.setString(7, basketPostDTO.getMemo());

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
    public List<BasketPostDTO> select(String user_email){
        BasketPostDTO basketPostDTO = null;
        List<BasketPostDTO> list = new ArrayList<>();
        String SQL ="select * from ohouse_member m join basket p where m.user_email=? && p.user_email=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            ps.setString(2, user_email);
            rs = ps.executeQuery(); 
            while(rs.next()){
                basketPostDTO = new BasketPostDTO();
                basketPostDTO.setId(rs.getString("id"));
                basketPostDTO.setNum(rs.getString("num"));
                basketPostDTO.setPrice(rs.getString("price"));
                basketPostDTO.setSale(rs.getString("sale"));
                basketPostDTO.setTotalprice(rs.getString("totalprice"));
                basketPostDTO.setMemo(rs.getString("memo"));
                list.add(basketPostDTO);
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
