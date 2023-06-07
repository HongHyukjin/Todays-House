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
            jsonData += "{ \"idx\" : \"" + photoPostDTO.getIdx() + "\","
                     +   "\"pyeong\" : \"" + photoPostDTO.getPyeong() + "\","
                     +   "\"type\" : \"" + photoPostDTO.getType() + "\","
                     +   "\"style\" : \"" + photoPostDTO.getStyle() + "\","
                     +   "\"place\" : \"" + photoPostDTO.getPlace() + "\","
                     +   "\"file\" : \"" + photoPostDTO.getFile() + "\","
                     +   "\"memo\" : \"" + photoPostDTO.getMemo() + "\""
                     + "},";
        }
        else{
            jsonData += "{ \"idx\" : \"" + photoPostDTO.getIdx() + "\","
                     +   "\"pyeong\" : \"" + photoPostDTO.getPyeong() + "\","
                     +   "\"type\" : \"" + photoPostDTO.getType() + "\","
                     +   "\"style\" : \"" + photoPostDTO.getStyle() + "\","
                     +   "\"place\" : \"" + photoPostDTO.getPlace() + "\","
                     +   "\"file\" : \"" + photoPostDTO.getFile() + "\","
                     +   "\"memo\" : \"" + photoPostDTO.getMemo() + "\""
                     + "}";
        }
    }
    jsonData += "]}";
    response.getWriter().write(jsonData);
%>