<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="photo_post.PhotoPostDAO"%>
<%@ page import="photo_post.PhotoPostDTO"%>
<%@ page import="java.util.*"%>

<% request.setCharacterEncoding("UTF-8");%>


<%
    String user_email = request.getParameter("user_email");
    PhotoPostDAO photoPostDAO = new PhotoPostDAO();
    List<PhotoPostDTO> list = photoPostDAO.select(user_email);
    
    String jsonData = "{ \"result\": [";
    int cnt = 0;
    for(PhotoPostDTO photoPostDTO : list){
        cnt++;
        if(cnt < list.size()){
            jsonData += "{ \"imgUrl\" : \"" + photoPostDTO.getFile() + "\" },";
        }
        else{
            jsonData += "{ \"imgUrl\" : \"" + photoPostDTO.getFile() + "\" }";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>