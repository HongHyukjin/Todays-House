<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="photo_post.PhotoPostDAO"%>
<%@ page import="photo_post.PhotoPostDTO"%>

<% request.setCharacterEncoding("UTF-8");%>




<%
    PhotoPostDAO photoPostDAO = new PhotoPostDAO();
    PhotoPostDTO photoPostDTO = photoPostDAO.select();
 
%>

{"result" :"<%=photoPostDTO.getFile()%>"}