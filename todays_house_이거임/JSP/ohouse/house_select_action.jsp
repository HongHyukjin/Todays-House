<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="house_post.HousePostDAO"%>
<%@ page import="house_post.HousePostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    HousePostDAO housePostDAO = new HousePostDAO();
    List<HousePostDTO> list = housePostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(HousePostDTO housePostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"file\" : \"" + housePostDTO.getFile() + "\","
                     +   "\"house_post\" : \"" + housePostDTO.getHouse_title() + "\","
                     +   "\"house_content\" : \"" + housePostDTO.getHouse_content() + "\""
                     + "},";
        }   
        else{
            jsonData += "{ \"file\" : \"" + housePostDTO.getFile() + "\","
                     +   "\"house_post\" : \"" + housePostDTO.getHouse_title() + "\","
                     +   "\"house_content\" : \"" + housePostDTO.getHouse_content() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>