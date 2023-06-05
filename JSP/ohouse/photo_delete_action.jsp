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
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="photo_post.PhotoPostDTO" id="photoPostDTO" scope="page"/>

<jsp:setProperty name="photoPostDTO" property="idx"/>

<%
    PhotoPostDAO photoPostDAO = new PhotoPostDAO();
    int result = photoPostDAO.delete(photoPostDTO);
%>

{"result":"<%=result%>"}