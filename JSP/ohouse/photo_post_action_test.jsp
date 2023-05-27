<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>
<%@
    page
    language="java"
    contentType="application/json; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="video_post.VideoPostDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="photo_post.PhotoPostDTO" id="photoPostDTO" scope="page"/>
<jsp:setProperty name="photoPostDTO" property="pyeong"/>
<jsp:setProperty name="photoPostDTO" property="type"/>
<jsp:setProperty name="photoPostDTO" property="style"/>
<jsp:setProperty name="photoPostDTO" property="file"/>
<jsp:setProperty name="photoPostDTO" property="place"/>
<jsp:setProperty name="photoPostDTO" property="memo"/>

<%  
    String jsonData = "{ \"result\": {"
    + "\"pyeong\": \"" + photoPostDTO.getPyeong() + "\","
    + "\"type\": \"" + photoPostDTO.getType() + "\","
    + "\"style\": \"" + photoPostDTO.getStyle() + "\","
    + "\"file\": \"" + photoPostDTO.getFile() + "\","
    + "\"place\": \"" + photoPostDTO.getPlace() + "\","
    + "\"memo\": \"" + photoPostDTO.getMemo() + "\""
    + "} }";

    response.getWriter().write(jsonData);
%>